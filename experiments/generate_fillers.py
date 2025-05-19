import pandas as pd
import json

# Load the file
df = pd.read_excel("exp2_fillers.xlsx")

# Replace missing values
df = df.fillna("")

# Function to split SPR sentence into list of words
def split_spr(text):
    return [w for w in text.strip().split() if w]

# Construct list of filler items
filler_items = []

for _, row in df.iterrows():
    dialogue = row["Dialogue1"].strip() + "\n" + row["Dialogue2"].strip()
    filler_items.append({
        "item_id": row["ItemNo"],
        "class": row["Type"],
        "dialogue": dialogue,
        "spr": split_spr(row["Ambg"]),
        "question": row["Question"],
        "expected_response": row["ExpectedAnswer"]
    })

# Convert to JS variable string
js_string = "const fillerStimuli = " + json.dumps(filler_items, indent=2, ensure_ascii=False) + ";"

# Write to JS file
with open("fillers.js", "w", encoding="utf-8") as f:
    f.write(js_string)

print("✅ Filler file written to fillers.js")