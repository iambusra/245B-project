import os
import json
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# === CONFIGURATION ===
data_dir = '.'  # path to your folder
json_files = [f for f in os.listdir(data_dir) if f.endswith('.json')]

all_rows = []

# === LOAD ALL JSON FILES ===
for filename in json_files:
    filepath = os.path.join(data_dir, filename)
    with open(filepath, 'r') as f:
        raw = json.load(f)
        data = json.loads(raw)
        for row in data:
            row['source_file'] = filename
            all_rows.append(row)

# === COMBINE AND CLEAN ===
df = pd.DataFrame(all_rows)
print("COLUMNS:", df.columns.tolist())

# Only keep 'spr' and 'comprehension' types
df = df[df['type'].isin(['spr', 'comprehension'])]

# Ensure required columns exist
for col in ['item_id', 'spr_condition', 'context_condition']:
    if col not in df.columns:
        df[col] = 'unknown'

# === COUNT OCCURRENCES PER ITEM ===
grouped = df.groupby(['item_id', 'context_condition', 'spr_condition']).size().reset_index(name='count')
grouped = grouped.sort_values(by=['item_id', 'context_condition', 'spr_condition'])

print("\n=== EXPERIMENT ITEM COUNTS ===")
print(grouped)
grouped.to_csv('experiment_condition_counts.csv', index=False)
print("Saved summary to 'experiment_condition_counts.csv'")

# === MATCH/MISMATCH PLOTS ===
# Drop rows with missing context or spr condition
cond_df = df[df['context_condition'].notna() & df['spr_condition'].notna()]

# Compute match type (e.g., "matched dere", "mismatched amb")
cond_df['match_type'] = cond_df.apply(
    lambda row: f"{'matched' if row['context_condition'] == row['spr_condition'] else 'mismatched'} {row['context_condition']}",
    axis=1
)

# Plot match vs mismatch per condition
plt.figure(figsize=(10, 6))
sns.countplot(data=cond_df, x='match_type', order=cond_df['match_type'].value_counts().index)
plt.title('Match vs Mismatch per Context Condition')
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig('match_mismatch_by_condition.png')
plt.close()
print("Saved plot: match_mismatch_by_condition.png")

# Compute overall match vs mismatch
cond_df['match_status'] = cond_df['context_condition'] == cond_df['spr_condition']
cond_df['match_status'] = cond_df['match_status'].map({True: 'matched', False: 'mismatched'})

plt.figure(figsize=(6, 4))
sns.countplot(data=cond_df, x='match_status')
plt.title('Overall Match vs Mismatch Ratio')
plt.tight_layout()
plt.savefig('overall_match_mismatch_ratio.png')
plt.close()
print("Saved plot: overall_match_mismatch_ratio.png")
