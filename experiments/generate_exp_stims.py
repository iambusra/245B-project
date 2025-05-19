import pandas as pd
import json

# Load Excel
df = pd.read_excel("exp2_materials.xlsx", skiprows=1)

# Assign proper column names
df.columns = [
    "class", "item_id",
    "amb_dialogue", "amb_spr", "amb_question", "amb_expected",
    "dere_dialogue", "dere_spr", "dere_question", "dere_expected",
    "dedicto_dialogue", "dedicto_spr", "dedicto_question", "dedicto_expected"
]

# Replace NaNs with empty strings to avoid "null"
df = df.fillna("")

# Function to clean and split SPR sentence into a list of words
def split_spr(spr_str):
    return [word for word in spr_str.split() if word]

# Construct structured dictionary
stimuli_dict = {}

for _, row in df.iterrows():
    item_id = row["item_id"]
    stimuli_dict[item_id] = {
        "class": row["class"],
        "amb": {
            "dialogue": row["amb_dialogue"],
            "spr": split_spr(row["amb_spr"]),
            "question": row["amb_question"],
            "expected_response": row["amb_expected"]
        },
        "dere": {
            "dialogue": row["dere_dialogue"],
            "spr": split_spr(row["dere_spr"]),
            "question": row["dere_question"],
            "expected_response": row["dere_expected"]
        },
        "dedicto": {
            "dialogue": row["dedicto_dialogue"],
            "spr": split_spr(row["dedicto_spr"]),
            "question": row["dedicto_question"],
            "expected_response": row["dedicto_expected"]
        }
    }

# Convert to JavaScript string
js_string = "const experimentStimuli = " + json.dumps(stimuli_dict, indent=2, ensure_ascii=False) + ";"

# Save to JS file
with open("experiment_stims.js", "w", encoding="utf-8") as f:
    f.write(js_string)

print("✅ Stimuli file written to experiment_stims.js")