const puppeteer = require('puppeteer');
const fs = require('fs');
const { stringify } = require('csv-stringify'); // Optional, if using CSV

async function runExperiment(runNumber) {
    console.log(`Starting runExperiment(${runNumber})`);
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try {
        const filePath = `file://${__dirname}/index.html`;
        console.log("Loading file:", filePath);
        await page.goto(filePath);
        console.log('Page loaded successfully.');
        await new Promise(r => setTimeout(r, 1000)); //Settle time
    } catch (error) {
        console.error('Error loading the page:', error);
        await browser.close();
        return;
    }

    // Press spacebar once for initial screen
    try {
        console.log("Pressing spacebar on welcome screen");
        await page.keyboard.press(' ');
        await new Promise(r => setTimeout(r, 50)); //Settle time
    } catch (error) {
        console.error("Error pressing spacebar on welcome screen", error);
        await browser.close();
        return;
    }

    try {
        // Wait for the button to load, with a longer timeout
        await page.waitForSelector('button.styled-button', { timeout: 60000 });
        console.log('Button found!');

        // Now click the button
        await page.click('button.styled-button');
        console.log('Button clicked!');
    } catch (error) {
        console.error("Error clicking consent button", error);
        await browser.close();
        return;
    }

    // Main experiment interaction loop
    while (true) {
        let comprehensionQuestionVisible = false;
        try {
            comprehensionQuestionVisible = await page.evaluate(() => {
                const element = document.querySelector('body');
                return element && element.textContent.includes('F = False, J = True');
            });
        } catch (error) {
            console.error("Error checking for comprehension question:", error);
        }

        if (comprehensionQuestionVisible) {
            const answer = Math.random() < 0.5 ? 'f' : 'j';
            console.log(`Answering comprehension question with: ${answer}`);
            await page.keyboard.press(answer);
            await new Promise(r => setTimeout(r, 10));
        } else {
            console.log("Advancing through SPR (pressing spacebar)");
            await page.keyboard.press(' ');
            await new Promise(r => setTimeout(r, 50));
        }

        // Check if the exit survey is visible
        let exitSurveyVisible = false;
        try {
            exitSurveyVisible = await page.evaluate(() => {
                const element = document.querySelector('h2');
                return element && element.textContent.includes('Exit Survey');
            });
        } catch (error) {
            console.error("Error checking for exit survey:", error);
        }


        if (exitSurveyVisible) {
          console.log("Exit survey is visible, waiting for form to render");
        
          try {
            // Wait for form inputs
            await page.waitForSelector('input[name="age"]', { timeout: 10000 });
        
            console.log("Filling in fields...");
            await page.type('input[name="age"]', '25');
            await page.click('input[name="handedness"][value="Right"]');
            await page.type('input[name="native_langs"]', 'English');
            await page.type('input[name="fluent_langs"]', 'English');
        
            // Small delay to ensure all fields are filled and any client-side validation has run
            await new Promise(resolve => setTimeout(resolve, 1000));
        
            console.log("Submitting form with Enter key...");
            await page.keyboard.press('Enter');
        
            // Wait for "Survey Submitted" screen
            await page.waitForFunction(() => {
              const h2 = document.querySelector('h2');
              return h2 && h2.textContent.includes('Survey Submitted');
            }, { timeout: 10000 });
        
            console.log("Survey submitted. Pressing space to continue.");
            await page.keyboard.press(' ');
            await new Promise(r => setTimeout(r, 1000)); // Wait a bit longer here
        
            // Check for "Saving your data" screen
            const savingDataVisible = await page.evaluate(() => {
              const h2 = document.querySelector('h2');
              return h2 && h2.textContent.includes('Saving your data');
            });
        
            if (savingDataVisible) {
              console.log("Saving data screen visible. Waiting...");
              await new Promise(r => setTimeout(r, 2000)); // Wait for data to save
            }
        
            console.log("Checking for final 'Thank you' screen...");
            let thankYouScreenVisible = false;
            for (let i = 0; i < 10; i++) { // Try up to 10 times
              thankYouScreenVisible = await page.evaluate(() => {
                const h2 = document.querySelector('h2');
                return h2 && h2.textContent.includes('Thank you');
              });
              if (thankYouScreenVisible) {
                console.log("Final 'Thank you' screen visible, exiting survey process");
                break;
              }
              console.log("'Thank you' screen not found, advancing...");
              await page.keyboard.press(' ');
              await new Promise(r => setTimeout(r, 500));
            }
        
            if (!thankYouScreenVisible) {
              console.log("Warning: 'Thank you' screen not found after multiple attempts");
            }
        
          } catch (e) {
            console.error("Error in exit survey process", e);
            console.error(e.stack);  // Log the full error stack for more details

            // Take a screenshot for debugging
            await page.screenshot({path: 'error-screenshot.png'});
            console.log("Error screenshot saved as 'error-screenshot.png'");
          }
      
          console.log("Exit survey process completed");
        }


        // Check if the "Thank you" screen is visible
        let thankYouScreenVisible = false;
        try {
            thankYouScreenVisible = await page.evaluate(() => {
                const element = document.querySelector('h2');
                return element && element.textContent.includes('Thank you!');
            });
        } catch (error) {
            console.error("Error checking for 'Thank you' screen:", error);
        }

        if (thankYouScreenVisible) {
            console.log("Thank you screen visible, exiting loop");
            break;
        }
    }

    // Extract data from jsPsych
    let jsPsychData;
    try {
        jsPsychData = await page.evaluate(() => {
            return jsPsych.data.get().json(); // Use .csv() if needed
        });
        console.log("Successfully extracted jsPsych data");
    } catch (error) {
        console.error("Error extracting jsPsych ", error);
        await browser.close();
        return;
    }

    // Save the data to a file
    try {
        await saveData(jsPsychData, runNumber);
        console.log("Successfully saved data");
    } catch (error) {
        console.error("Error saving ", error);
    }

    await browser.close();
    console.log(`Finished runExperiment(${runNumber})`);
}

async function saveData(data, runNumber) {
    const filename = `data/experiment_run_${runNumber}.json`;
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    console.log(`Data saved to ${filename}`);
}

async function main() {
    const numRuns = 1;
    for (let i = 1; i <= numRuns; i++) {
        console.log(`Starting experiment run ${i}...`);
        await runExperiment(i);
        console.log(`Experiment run ${i} complete.`);
    }
    console.log('All experiment runs complete!');
}

async function main() {
    const numRuns = 2;
    for (let i = 1; i <= numRuns; i++) {
        console.log(`Starting experiment run ${i}...`);
        await runExperiment(i);
        console.log(`Experiment run ${i} complete.`);
    }
    console.log('All experiment runs complete!');
}

main();
