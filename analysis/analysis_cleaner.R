# ========================
# 1. Libraries and Setup
# ========================
library(dplyr)
library(readr)
library(purrr)
library(stringr)
library(ggplot2)
library(lme4)
library(lmerTest)
library(emmeans)
library(brms)
library(tidybayes)
# install.packages("brms"); install.packages("tidybayes"); install.packages("bayestestR") # if needed

# ========================
# 2. Load and Combine All Participant Data
# ========================
csv_folder <- "/Users/busramarsan/Documents/phd/methods/245B-project/analysis/osfstorage-archive"
csv_files <- list.files(csv_folder, pattern = "\\.csv$", full.names = TRUE)

read_participant_csv <- function(file) {
  df <- read_csv(file, show_col_types = FALSE)
  # Add participant_id: prefer Prolific, else filename
  if ("prolific_id" %in% names(df) && any(!is.na(df$prolific_id))) {
    df$participant_id <- df$prolific_id[which(!is.na(df$prolific_id))[1]]
  } else {
    df$participant_id <- str_remove(basename(file), ".csv$")
  }
  # Coerce relevant columns to character
  cols_to_fix <- c("participant_group", "context_condition", "spr_condition", "type", "word", "label", "attention_check_result")
  for (col in cols_to_fix) {
    if (col %in% names(df)) {
      df[[col]] <- as.character(df[[col]])
    }
  }
  df
}

all_data <- map_dfr(csv_files, read_participant_csv)
glimpse(all_data)

# ========================
# 3. Attention Check Filtering
# ========================
table(all_data$attention_check_result, useNA = "ifany")

# Explore attention check structure
attention_by_pt <- all_data %>%
  filter(!is.na(attention_check_result)) %>%
  group_by(participant_id) %>%
  summarize(attn_checks = n(),
            attn_passed = sum(attention_check_result == "pass"),
            attn_failed = sum(attention_check_result == "fail"))

attention_by_pt %>% arrange(attn_checks)
unique(all_data$attention_check_result)
summary(is.na(all_data$attention_check_result))
all_data %>% filter(!is.na(attention_check_result)) %>% count(attention_check_result)

# Update for "passed" label if needed
attention_by_pt <- all_data %>%
  filter(!is.na(attention_check_result)) %>%
  group_by(participant_id) %>%
  summarize(attn_checks = n(),
            attn_passed = sum(attention_check_result == "passed"))

to_exclude <- attention_by_pt %>% filter(attn_passed < 2) %>% pull(participant_id)
cat("Participants to exclude (did not pass both checks):", to_exclude, "\n")
cat("Number to exclude:", length(to_exclude), "\n")

clean_data <- all_data %>% filter(!(participant_id %in% to_exclude))
clean_data %>% distinct(participant_id) %>% count()


list.files(csv_folder, pattern = "\\.csv$", full.names = TRUE)


# ========================
# 4. Overview: Data Structure and Counts
# ========================
clean_data %>%
  group_by(participant_id) %>%
  summarize(total_trials = n()) %>%
  ggplot(aes(x = total_trials)) +
  geom_histogram(binwidth = 2, fill = "orchid", color = "black") +
  labs(title = "Trials per Participant (After Exclusion)", x = "Trials", y = "Count of Participants")

unique(clean_data$type)
unique(clean_data$item_id)
unique(clean_data$class)
unique(clean_data$context_condition)
unique(clean_data$spr_condition)

# ========================
# 5. Comprehension (Filler/Baseline & Critical)
# ========================
filler_comprehension <- clean_data %>%
  filter((type == "trial_comprehension" | type == "comprehension") &
           (context_condition == "filler" | spr_condition == "filler"))

critical_comprehension <- clean_data %>%
  filter((type == "trial_comprehension" | type == "comprehension") &
           (context_condition %in% c("dere", "dedicto", "amb")) &
           (spr_condition %in% c("dere", "dedicto", "amb")))

# Filler
filler_acc <- mean(filler_comprehension$response_correct == TRUE, na.rm = TRUE)
filler_rt  <- median(filler_comprehension$response_time, na.rm = TRUE)
# Critical
critical_acc <- mean(critical_comprehension$response_correct == TRUE, na.rm = TRUE)
critical_rt  <- median(critical_comprehension$response_time, na.rm = TRUE)

cat(sprintf("Filler accuracy: %.2f%%, median RT: %.0f ms\n", filler_acc*100, filler_rt))
cat(sprintf("Critical accuracy: %.2f%%, median RT: %.0f ms\n", critical_acc*100, critical_rt))

# Plot: Filler vs Critical
plot_comprehension <- bind_rows(
  filler_comprehension %>% mutate(group = "Filler"),
  critical_comprehension %>% mutate(group = "Critical")
)

ggplot(plot_comprehension, aes(x = group, y = as.numeric(response_correct))) +
  geom_violin(fill = "turquoise", alpha = 0.6, trim = FALSE) +
  geom_jitter(width = 0.1, height = 0.02, alpha = 0.4) +
  stat_summary(fun = mean, geom = "point", shape = 21, fill = "black", size = 3) +
  labs(title = "Comprehension Accuracy: Filler vs. Critical", y = "Accuracy (1 = correct)", x = "")

ggplot(plot_comprehension, aes(x = group, y = response_time)) +
  geom_violin(fill = "plum", alpha = 0.6, trim = FALSE) +
  geom_jitter(width = 0.1, alpha = 0.4) +
  stat_summary(fun = median, geom = "point", shape = 21, fill = "black", size = 3) +
  labs(title = "Comprehension RT: Filler vs. Critical", y = "Response time (ms)", x = "")

# ========================
# 6. Trim Outliers for RT
# ========================
lower_bound <- 50
upper_bound <- 10000
filler_comprehension_trim <- filler_comprehension %>%
  filter(response_time >= lower_bound, response_time <= upper_bound)
critical_comprehension_trim <- critical_comprehension %>%
  filter(response_time >= lower_bound, response_time <= upper_bound)

filler_rt_trim  <- median(filler_comprehension_trim$response_time, na.rm = TRUE)
critical_rt_trim  <- median(critical_comprehension_trim$response_time, na.rm = TRUE)
cat(sprintf("Filler median RT (trimmed): %.0f ms\n", filler_rt_trim))
cat(sprintf("Critical median RT (trimmed): %.0f ms\n", critical_rt_trim))

plot_comprehension_trim <- bind_rows(
  filler_comprehension_trim %>% mutate(group = "Filler"),
  critical_comprehension_trim %>% mutate(group = "Critical")
)

ggplot(plot_comprehension_trim, aes(x = group, y = response_time)) +
  geom_violin(fill = "plum", alpha = 0.6, trim = FALSE) +
  geom_jitter(width = 0.1, alpha = 0.4) +
  stat_summary(fun = median, geom = "point", shape = 21, fill = "black", size = 3) +
  labs(title = "Comprehension RT: Filler vs. Critical (Trimmed)", y = "Response time (ms)", x = "")

# ========================
# 7. SPR DATA: Clean, Structure, Plots
# ========================
table(clean_data$type, useNA = "ifany")
summary(clean_data$reading_time)

spr_data <- clean_data %>%
  filter(type %in% c("trial_spr", "spr")) %>%
  filter(!is.na(reading_time), reading_time >= 50, reading_time <= 2000)

cat("SPR trials after cleaning:", nrow(spr_data), "\n")
cat("Participants in cleaned SPR data:", n_distinct(spr_data$participant_id), "\n")
summary(spr_data$reading_time)

ggplot(spr_data, aes(x = reading_time, fill = spr_condition)) +
  geom_histogram(binwidth = 50, color = "black", alpha = 0.6, position = "identity") +
  facet_wrap(~spr_condition) +
  labs(title = "Self-Paced Reading Time by SPR Condition", x = "Reading Time (ms)", y = "Count") +
  theme_minimal()

# Word position within each sentence
# Filter to experimental conditions only
# Define junk tokens
# Minimal filtering — retain all alphabetic tokens, allow uppercase subject names
library(stringr)

# BEFORE any filtering, check if "istiyor" is present per item
all_data %>% filter(str_detect(word, "istiyor")) %>% count(item_id, participant_id)

# Define your junk tokens, punctuation-free, all lowercase
junk_tokens <- c("a", "yani", "demek", "desene", "ha", "hep")

# Clean word column by stripping punctuation, whitespace, and lowercasing
spr_data <- spr_data %>%
  filter(spr_condition %in% c("amb", "dedicto", "dere")) %>%
  mutate(
    word_clean = tolower(str_trim(str_remove_all(word, "[[:punct:]]")))
  ) %>%
  group_by(participant_id, item_id) %>%
  mutate(word_position = row_number()) %>%
  ungroup()

# Filter out junk tokens based on the cleaned word column
spr_data_clean <- spr_data %>%
  filter(!word_clean %in% junk_tokens)


## These are problematic trials, they need to go
library(tibble) # for tribble

bad_trials <- tribble(
  ~participant_id, ~item_id, ~spr_condition, ~context_condition,
  "65490ad4dc55c188bf6482dc", "çiğnemek / to chew", "dedicto", "amb",
  "609eda349f5d29975fbc2145", "yemek / to eat", "dedicto", "amb",
  "65490ad4dc55c188bf6482dc", "kırmak / to break", "dedicto", "amb",
  "65312507684ab813603caab9", "pişirmek / to cook", "dedicto", "amb",
  "60fe16b7b77309545913f23d", "dikmek / to sew", "dedicto", "amb",
  "668aeea31e1c6db3449f15cf", "örmek / to knit", "dedicto", "dere",
  "65312507684ab813603caab9", "yırtmak / to tear", "dere", "dedicto",
  "65490ad4dc55c188bf6482dc", "yırtmak / to tear", "dere", "dedicto",
  "65312507684ab813603caab9", "ufalamak / to crumble", "dere", "dedicto",
  "65312507684ab813603caab9", "yutmak / to swallow", "dere", "dedicto",
  "609eda349f5d29975fbc2145", "kırmak / to break", "dere", "dedicto",
  "uljxobr8bh", "kırmak / to break", "dere", "dere",
  "665a20dfbde31ca74fc7a3af", "ezmek / to smash", "dere", "amb",
  "65312507684ab813603caab9", "çiğnemek / to chew", "amb", "dere",
  "665a20dfbde31ca74fc7a3af", "çiğnemek / to chew", "amb", "dedicto",
  "65312507684ab813603caab9", "oymak / to carve", "amb", "dere",
  "65312507684ab813603caab9", "dikmek / to sew", "amb", "dere",
  "65490ad4dc55c188bf6482dc", "bükmek / to bend", "amb", "dere",
  "668aeea31e1c6db3449f15cf", "yemek / to eat", "amb", "dedicto",
  "g5d2497tcv", "yemek / to eat", "amb", "amb"  
)



############################################################################################
############################################################################################
############################################################################################
## Sanity checks here
spr_data_clean <- spr_data_clean %>%
  anti_join(bad_trials, by = c("participant_id", "item_id", "spr_condition", "context_condition"))

spr_data_exp <- spr_data_clean %>%
  filter(spr_condition %in% c("amb", "dedicto", "dere"),
         context_condition %in% c("amb", "dedicto", "dere")) %>%
  group_by(participant_id, item_id, spr_condition) %>%
  mutate(word_position = row_number()) %>%
  ungroup() %>%
  mutate(context_spr_combo = paste(context_condition, spr_condition, sep = "_"))

filtered_words <- spr_data %>% filter(word_clean %in% junk_tokens)
print(filtered_words %>% count(word, word_clean, sort = TRUE))

spr_data_exp %>%
  group_by(spr_condition, item_id, participant_id) %>%
  summarize(n_tokens = n(), .groups = "drop") %>%
  group_by(spr_condition, n_tokens) %>%
  summarize(n_trials = n()) %>%
  arrange(spr_condition, n_tokens)

spr_data_exp %>%
  arrange(participant_id, item_id, word_position) %>%
  group_by(participant_id, item_id) %>%
  summarize(
    spr_condition = first(spr_condition),
    context_condition = first(context_condition),
    full_sentence = paste(word, collapse = " "),
    n_tokens = n(),
    .groups = "drop"
  ) %>%
  arrange(n_tokens, spr_condition, full_sentence) %>%
  print(n = Inf)


spr_export <- spr_data_exp %>%
  arrange(participant_id, item_id, word_position) %>%
  group_by(participant_id, item_id) %>%
  summarize(
    spr_condition = first(spr_condition),
    context_condition = first(context_condition),
    full_sentence = paste(word, collapse = " "),
    n_tokens = n(),
    .groups = "drop"
  ) %>%
  arrange(n_tokens, spr_condition, full_sentence)

# Write to CSV — adjust the path if needed
write_csv(spr_export, "filtered_spr_trials.csv")

############################################################################################
############################################################################################
############################################################################################

# We are sane. Finally.



spr_data %>%
  group_by(spr_condition, item_id, participant_id) %>%
  summarize(n_words = n(), .groups = "drop") %>%
  ggplot(aes(x = spr_condition, y = n_words)) +
  geom_violin(fill = "orange", alpha = 0.6) +
  geom_jitter(width = 0.2, height = 0.1, alpha = 0.3) +
  labs(title = "Number of Words per SPR Trial", y = "Word Count")

ggplot(spr_data, aes(x = word_position, y = reading_time, color = spr_condition)) +
  stat_summary(fun = mean, geom = "line", size = 1) +
  labs(title = "Average Reading Time by Word Position and Condition", x = "Word Position", y = "Mean Reading Time (ms)", color = "Condition") +
  theme_minimal()



spr_data_clean %>% filter(word_position == 1) %>% count(spr_condition, word, sort = TRUE)

# ========================
# 8. SPR: By Item, By Class, By Item+Class
# ========================
item_rts <- spr_data_clean %>%
  filter(spr_condition %in% c("dere", "dedicto", "amb")) %>%
  group_by(item_id) %>%
  summarize(mean_rt = mean(reading_time, na.rm = TRUE), n = n())

ggplot(item_rts, aes(x = reorder(item_id, mean_rt), y = mean_rt)) +
  geom_col(fill = "skyblue") +
  labs(title = "Mean SPR RT by Item (experiment only)", x = "Item ID", y = "Mean Reading Time (ms)") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 90))

spr_data_clean %>%
  filter(spr_condition %in% c("dere", "dedicto", "amb")) %>%
  group_by(class) %>%
  summarize(mean_rt = mean(reading_time, na.rm = TRUE),
            sd_rt = sd(reading_time, na.rm = TRUE),
            n = n()) %>%
  ggplot(aes(x = reorder(class, mean_rt), y = mean_rt, fill = class)) +
  geom_col(show.legend = FALSE) +
  geom_errorbar(aes(ymin = mean_rt - sd_rt, ymax = mean_rt + sd_rt), width = 0.2) +
  labs(title = "Mean SPR RT by Verb Class (experiment only)", x = "Verb Class", y = "Mean Reading Time (ms)") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 30, hjust = 1))

ggplot(
  spr_data_clean %>% filter(spr_condition %in% c("dere", "dedicto", "amb")),
  aes(x = reorder(item_id, reading_time, FUN = median), y = reading_time)
) +
  geom_boxplot(outlier.shape = 21, outlier.colour = "red", fill = "lightblue") +
  labs(title = "SPR RT Distributions by Item (experiment only)", x = "Item ID", y = "Reading Time (ms)") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 90))

# ========================
# 9. Comprehension: Per Item, Class, Condition, and Item+Condition
# ========================
all_comprehension <- clean_data %>%
  filter(type %in% c("trial_comprehension", "comprehension")) %>%
  filter(!is.na(item_id))

comp_by_item <- all_comprehension %>%
  group_by(item_id) %>%
  summarize(mean_acc = mean(response_correct == TRUE, na.rm = TRUE),
            n = n(),
            mean_rt = mean(response_time, na.rm = TRUE),
            sd_rt = sd(response_time, na.rm = TRUE))

ggplot(comp_by_item, aes(x = reorder(item_id, mean_acc), y = mean_acc)) +
  geom_col(fill = "orchid") +
  labs(title = "Comprehension Accuracy by Item", x = "Item ID", y = "Accuracy") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 90))

comp_by_class <- all_comprehension %>%
  group_by(class) %>%
  summarize(mean_acc = mean(response_correct == TRUE, na.rm = TRUE),
            n = n(),
            mean_rt = mean(response_time, na.rm = TRUE),
            sd_rt = sd(response_time, na.rm = TRUE))

ggplot(comp_by_class, aes(x = reorder(class, mean_acc), y = mean_acc, fill = class)) +
  geom_col(show.legend = FALSE) +
  labs(title = "Comprehension Accuracy by Verb Class", x = "Verb Class", y = "Accuracy") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 30, hjust = 1))

comp_by_cond <- all_comprehension %>%
  group_by(spr_condition) %>%
  summarize(mean_acc = mean(response_correct == TRUE, na.rm = TRUE),
            n = n(),
            mean_rt = mean(response_time, na.rm = TRUE),
            sd_rt = sd(response_time, na.rm = TRUE))

ggplot(comp_by_cond, aes(x = spr_condition, y = mean_acc, fill = spr_condition)) +
  geom_col(show.legend = FALSE) +
  labs(title = "Comprehension Accuracy by SPR Condition", x = "Condition", y = "Accuracy") +
  theme_minimal()

comp_by_item_cond <- all_comprehension %>%
  group_by(item_id, spr_condition) %>%
  summarize(mean_acc = mean(response_correct == TRUE, na.rm = TRUE),
            n = n(),
            mean_rt = mean(response_time, na.rm = TRUE))

ggplot(comp_by_item_cond, aes(x = spr_condition, y = mean_acc, fill = spr_condition)) +
  geom_col(show.legend = FALSE, position = "dodge") +
  facet_wrap(~item_id) +
  labs(title = "Comprehension Accuracy by Item & Condition", x = "Condition", y = "Accuracy") +
  theme_minimal()

# ========================
# 10. SPR & COMPREHENSION: Experimental Conditions Only
# ========================
#spr_data_exp <- spr_data_clean %>%
#  filter(spr_condition %in% c("amb", "dedicto", "dere"),
#         context_condition %in% c("amb", "dedicto", "dere")) %>%
#  group_by(participant_id, item_id, spr_condition) %>%
#  mutate(word_position = row_number()) %>%
#  ungroup() %>%
#  mutate(context_spr_combo = paste(context_condition, spr_condition, sep = "_"))

ggplot(spr_data_exp, aes(x = word_position, y = reading_time, color = spr_condition)) +
  stat_summary(fun = mean, geom = "line", linewidth = 1.1) +
  labs(title = "Mean SPR RT by Word Position (Critical Conditions Only)", x = "Word Position", y = "Mean Reading Time (ms)", color = "Condition") +
  theme_minimal()

# ========================
# 11. Matched vs Mismatched (SPR & Comp)
# ========================
spr_data_core <- spr_data_exp %>%
  filter(context_condition %in% c("dere", "dedicto"),
         spr_condition %in% c("dere", "dedicto")) %>%
  mutate(match_type = ifelse(context_condition == spr_condition, "matched", "mismatched"))

ggplot(spr_data_core, aes(x = match_type, y = reading_time, fill = match_type)) +
  geom_violin(trim = FALSE, alpha = 0.7, color = "black") +
  stat_summary(fun = mean, geom = "point", shape = 21, size = 3, fill = "white") +
  labs(title = "SPR Reading Time: Matched vs. Mismatched", x = "", y = "Reading Time (ms)") +
  theme_minimal()

ggplot(spr_data_core, aes(x = word_position, y = reading_time, color = match_type)) +
  stat_summary(fun = mean, geom = "line", linewidth = 1.2) +
  labs(title = "SPR RT by Word Position: Matched vs. Mismatched", x = "Word Position", y = "Mean Reading Time (ms)", color = "Type") +
  theme_minimal()

comp_core <- all_comprehension %>%
  filter(context_condition %in% c("dere", "dedicto"),
         spr_condition %in% c("dere", "dedicto")) %>%
  mutate(match_type = ifelse(context_condition == spr_condition, "matched", "mismatched"))

comp_core %>%
  group_by(match_type) %>%
  summarize(accuracy = mean(response_correct == TRUE, na.rm = TRUE),
            median_rt = median(response_time, na.rm = TRUE), n = n())

ggplot(comp_core, aes(x = match_type, y = as.numeric(response_correct), fill = match_type)) +
  geom_violin(trim = FALSE, alpha = 0.7, color = "black") +
  stat_summary(fun = mean, geom = "point", shape = 21, size = 3, fill = "white") +
  labs(title = "Comprehension Accuracy: Matched vs. Mismatched", x = "", y = "Accuracy") +
  theme_minimal()

# ========================
# 12. EXPERIMENTAL: By context+SPR condition
# ========================
#spr_data_exp <- spr_data_clean %>%
#  filter(spr_condition %in% c("amb", "dedicto", "dere"),
#         context_condition %in% c("amb", "dedicto", "dere")) %>%
#  group_by(participant_id, item_id, spr_condition) %>%
#  mutate(word_position = row_number()) %>%
#  ungroup()

comp_data_exp <- all_comprehension %>%
  filter(spr_condition %in% c("amb", "dedicto", "dere"),
         context_condition %in% c("amb", "dedicto", "dere")) %>%
  mutate(context_spr_combo = paste(context_condition, spr_condition, sep = "_"))

spr_summary <- spr_data_exp %>%
  group_by(context_spr_combo) %>%
  summarize(mean_rt = mean(reading_time, na.rm = TRUE),
            median_rt = median(reading_time, na.rm = TRUE),
            sd_rt = sd(reading_time, na.rm = TRUE), n = n())
print(spr_summary)

ggplot(spr_data_exp, aes(x = context_spr_combo, y = reading_time, fill = context_condition)) +
  geom_violin(trim = FALSE, alpha = 0.7) +
  stat_summary(fun = mean, geom = "point", shape = 21, size = 2, fill = "white") +
  labs(title = "SPR RT by Context + SPR Condition", x = "Context + SPR Condition", y = "Reading Time (ms)") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

comp_summary <- comp_data_exp %>%
  group_by(context_spr_combo) %>%
  summarize(accuracy = mean(response_correct == TRUE, na.rm = TRUE),
            median_rt = median(response_time, na.rm = TRUE), n = n())
print(comp_summary)

ggplot(comp_data_exp, aes(x = context_spr_combo, y = as.numeric(response_correct), fill = context_condition)) +
  geom_violin(trim = FALSE, alpha = 0.7) +
  stat_summary(fun = mean, geom = "point", shape = 21, size = 2, fill = "white") +
  labs(title = "Comprehension Accuracy by Context + SPR Condition", x = "Context + SPR Condition", y = "Accuracy") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

# ========================
# 13. COMPREHENSION RT (trimmed) and CI
# ========================
comp_data_exp_trim <- comp_data_exp %>% filter(response_time >= 50, response_time <= 10000)

ggplot(comp_data_exp_trim, aes(x = context_spr_combo, y = response_time, fill = context_condition)) +
  geom_violin(trim = FALSE, alpha = 0.7) +
  stat_summary(fun = median, geom = "point", shape = 21, size = 2, fill = "white") +
  labs(title = "Comprehension RT by Context + SPR Condition (trimmed)", x = "Context + SPR Condition", y = "Response Time (ms)") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

comp_summary_trim <- comp_data_exp_trim %>%
  group_by(context_spr_combo) %>%
  summarize(accuracy = mean(response_correct == TRUE, na.rm = TRUE),
            median_rt = median(response_time, na.rm = TRUE), n = n())
print(comp_summary_trim)

comp_summary_rt <- comp_data_exp_trim %>%
  group_by(context_spr_combo, context_condition) %>%
  summarize(mean_rt = mean(response_time, na.rm = TRUE),
            se_rt = sd(response_time, na.rm = TRUE) / sqrt(n()), n = n()) %>%
  mutate(ci_rt = se_rt * 1.96)

comp_summary_acc <- comp_data_exp_trim %>%
  group_by(context_spr_combo, context_condition) %>%
  summarize(mean_acc = mean(response_correct == TRUE, na.rm = TRUE),
            se_acc = sd(response_correct == TRUE, na.rm = TRUE) / sqrt(n()), n = n()) %>%
  mutate(ci_acc = se_acc * 1.96)

ggplot(comp_summary_rt, aes(x = context_spr_combo, y = mean_rt, fill = context_condition)) +
  geom_col(alpha = 0.8) +
  geom_errorbar(aes(ymin = mean_rt - ci_rt, ymax = mean_rt + ci_rt), width = 0.2) +
  labs(title = "Comprehension RT (trimmed): Mean ± 95% CI", x = "Context + SPR Condition", y = "Mean Response Time (ms)") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

ggplot(comp_summary_acc, aes(x = context_spr_combo, y = mean_acc, fill = context_condition)) +
  geom_col(alpha = 0.8) +
  geom_errorbar(aes(ymin = mean_acc - ci_acc, ymax = mean_acc + ci_acc), width = 0.2) +
  labs(title = "Comprehension Accuracy: Mean ± 95% CI", x = "Context + SPR Condition", y = "Mean Accuracy") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

# ========================
# 14. FREQUENTIST MODELS (LMM/GLMM)
# ========================
lmm_spr <- lmer(reading_time ~ context_condition * spr_condition + (1|participant_id) + (1|item_id), data = spr_data_exp)
summary(lmm_spr)
anova(lmm_spr)
emm <- emmeans(lmm_spr, ~ context_condition * spr_condition)
pairs(emm, simple = "each")

glmm_acc <- glmer(response_correct ~ context_condition * spr_condition + (1|participant_id) + (1|item_id), data = comp_data_exp_trim, family = binomial)
summary(glmm_acc)
anova(glmm_acc, test = "Chisq")
emm_acc <- emmeans(glmm_acc, ~ context_condition * spr_condition, type = "response")
pairs(emm_acc, simple = "each")

lmm_comp_rt <- lmer(response_time ~ context_condition * spr_condition + (1|participant_id) + (1|item_id), data = comp_data_exp_trim)
summary(lmm_comp_rt)
anova(lmm_comp_rt)

emm_df <- as.data.frame(emmeans(lmm_comp_rt, ~ context_condition * spr_condition))
ggplot(emm_df, aes(x = spr_condition, y = emmean, fill = context_condition)) +
  geom_bar(stat = "identity", position = "dodge") +
  geom_errorbar(aes(ymin = emmean - SE, ymax = emmean + SE), position = position_dodge(width=0.9), width=0.2) +
  labs(y = "Estimated Mean RT (ms)", x = "SPR Condition", fill = "Context")

glmm_acc2 <- glmer(response_correct ~ context_condition * spr_condition + (1|participant_id) + (1|item_id), data = comp_data_exp_trim, family = binomial, control = glmerControl(optimizer="bobyqa"))

# ========================
# 15. BAYESIAN (brms) ANALYSIS
# ========================
comp_data_exp_trim$combo <- paste(comp_data_exp_trim$context_condition, comp_data_exp_trim$spr_condition, sep="_")
comp_data_exp_trim$surprisal_type <- dplyr::case_when(
  comp_data_exp_trim$context_condition == comp_data_exp_trim$spr_condition ~ "matched",
  (comp_data_exp_trim$context_condition == "dere" & comp_data_exp_trim$spr_condition == "dedicto") |
    (comp_data_exp_trim$context_condition == "dedicto" & comp_data_exp_trim$spr_condition == "dere") ~ "mismatched_opposite",
  comp_data_exp_trim$context_condition == "amb" | comp_data_exp_trim$spr_condition == "amb" ~ "ambiguous",
  TRUE ~ "mismatched"
)
table(comp_data_exp_trim$surprisal_type)

comp_data_exp_trim$log_response_time <- log(comp_data_exp_trim$response_time + 1)

library(brms)

bayes_rt <- brm(
  log_response_time ~ surprisal_type + (1|participant_id) + (1|item_id),
  data = comp_data_exp_trim,
  cores = 4, chains = 4, iter = 4000,
  save_pars = save_pars(all = TRUE)   # <-- add this
)

bayes_acc <- brm(
  response_correct ~ surprisal_type + (1|participant_id) + (1|item_id),
  data = comp_data_exp_trim, family = bernoulli(),
  cores = 4, chains = 4, iter = 4000,
  save_pars = save_pars(all = TRUE)   # <-- add this
)


# Model comparison and posteriors
library(bayestestR)
bayesfactor_models(bayes_rt, null_model = update(bayes_rt, . ~ 1))
hypothesis(bayes_rt, "surprisal_typematched < 0")
hypothesis(bayes_rt, "surprisal_typemismatched_opposite > 0")
hypothesis(bayes_rt, "surprisal_typematched = 0")
hypothesis(bayes_rt, "surprisal_typemismatched_opposite = surprisal_typematched")
hypothesis(bayes_rt, "surprisal_typemismatched_opposite - surprisal_typematched > 0")
plot(conditional_effects(bayes_rt), points = TRUE)
plot(conditional_effects(bayes_acc), points = TRUE)

# tidybayes and emmeans posterior plots
emmeans_rt <- emmeans(bayes_rt, ~ surprisal_type)
emmeans_acc <- emmeans(bayes_acc, ~ surprisal_type, type = "response")
emmeans_draws <- gather_emmeans_draws(emmeans_rt)
acc_draws <- gather_emmeans_draws(emmeans_acc)

ggplot(emmeans_draws, aes(x = surprisal_type, y = exp(.value))) +
  stat_halfeye(.width = .95, fill = "skyblue") +
  labs(y = "Estimated RT (ms)", x = "Condition", title = "Posterior distributions of mean RTs") +
  theme_minimal()

ggplot(acc_draws, aes(x = surprisal_type, y = .value, fill = surprisal_type)) +
  stat_halfeye(.width = .95, point_interval = mean_qi, color = "black") +
  labs(title = "Posterior distributions of mean Accuracy", x = "Condition", y = "Estimated Accuracy") +
  scale_fill_brewer(type = "qual", palette = "Set2") +
  theme_minimal()

# Posterior summary tables and contrasts
emmeans_rt_tbl <- summary(emmeans_rt)
emmeans_rt_tbl$mean_ms <- exp(emmeans_rt_tbl$emmean)
emmeans_acc_tbl <- summary(emmeans_acc)
emmeans_acc_tbl

rt_contrasts <- contrast(emmeans_rt, method = "pairwise")
summary(rt_contrasts)
acc_contrasts <- contrast(emmeans_acc, method = "pairwise")
summary(acc_contrasts)

# ------------------------------
# 16. SPR READING TIME BY WORD POSITION & SUPRISAL TYPE
# ------------------------------

# First, label each SPR row with surprisal_type
spr_data_exp <- spr_data_exp %>%
  mutate(
    surprisal_type = dplyr::case_when(
      context_condition == spr_condition ~ "matched",
      (context_condition == "dere" & spr_condition == "dedicto") |
        (context_condition == "dedicto" & spr_condition == "dere") ~ "mismatched_opposite",
      context_condition == "amb" | spr_condition == "amb" ~ "ambiguous",
      TRUE ~ "mismatched"
    )
  )

# Optional: restrict only to matched, mismatched_opposite, ambiguous
spr_data_exp_core <- spr_data_exp %>%
  filter(surprisal_type %in% c("matched", "mismatched_opposite", "ambiguous"))

# Aggregate: mean or median RT by word position and surprisal type
spr_wordpos_summary <- spr_data_exp_core %>%
  group_by(word_position, surprisal_type) %>%
  summarize(
    mean_rt = mean(reading_time, na.rm = TRUE),
    median_rt = median(reading_time, na.rm = TRUE),
    se_rt = sd(reading_time, na.rm = TRUE) / sqrt(n()),
    n = n(),
    .groups = "drop"
  )

# Plot: Mean (or median) reading time by word position, by condition
library(ggplot2)
ggplot(spr_wordpos_summary, aes(x = word_position, y = mean_rt, color = surprisal_type)) +
  geom_line(size = 1.1) +
  geom_point(size = 2) +
  geom_errorbar(aes(ymin = mean_rt - se_rt, ymax = mean_rt + se_rt), width = 0.2, alpha = 0.5) +
  labs(
    title = "Mean Reading Time by Word Position and Surprisal Type",
    x = "Word Position",
    y = "Mean Reading Time (ms)",
    color = "Condition"
  ) +
  theme_minimal() +
  scale_color_manual(values = c("matched" = "#4daf4a", "mismatched_opposite" = "#e41a1c", "ambiguous" = "#377eb8"))

# Optional: median plot (swap y = median_rt)
ggplot(spr_wordpos_summary, aes(x = word_position, y = median_rt, color = surprisal_type)) +
  geom_line(size = 1.1) +
  geom_point(size = 2) +
  labs(
    title = "Median Reading Time by Word Position and Surprisal Type",
    x = "Word Position",
    y = "Median Reading Time (ms)",
    color = "Condition"
  ) +
  theme_minimal()

fixef(bayes_rt)



library(dplyr)
library(ggplot2)

# Ensure context_condition and spr_condition are factors (for nicer labeling)
#spr_data_exp <- spr_data_exp %>%
#  mutate(
#    context_condition = factor(context_condition, levels = c("dere", "dedicto", "amb")),
#    spr_condition = factor(spr_condition, levels = c("dere", "dedicto", "amb"))
#  )

# Summarize mean RT per word position, by context and SPR
rt_by_context_spr <- spr_data_exp %>%
  group_by(context_condition, spr_condition, word_position) %>%
  summarize(
    mean_rt = mean(reading_time, na.rm = TRUE),
    se_rt = sd(reading_time, na.rm = TRUE)/sqrt(n()),
    median_rt = median(reading_time, na.rm = TRUE),
    .groups = "drop"
  )

# Make the context_condition names pretty (optional)
context_labels <- c(
  dere = "de re context",
  dedicto = "de dicto context",
  amb = "ambiguous context"
)

# PLOT 1: Mean RT with error bars, faceted by context
ggplot(rt_by_context_spr, aes(x = word_position, y = mean_rt, color = spr_condition)) +
  geom_line(size = 1.1) +
  geom_point(size = 2) +
  geom_errorbar(aes(ymin = mean_rt - se_rt, ymax = mean_rt + se_rt), width = 0.1) +
  facet_wrap(~ context_condition, labeller = as_labeller(context_labels)) +
  labs(
    title = "Mean Reading Time by Word Position and SPR (Faceted by Context)",
    x = "Word Position",
    y = "Mean Reading Time (ms)",
    color = "SPR Condition"
  ) +
  theme_minimal()

# PLOT 2: Median RT, faceted by context
ggplot(rt_by_context_spr, aes(x = word_position, y = median_rt, color = spr_condition)) +
  geom_line(size = 1.1) +
  geom_point(size = 2) +
  facet_wrap(~ context_condition, labeller = as_labeller(context_labels)) +
  labs(
    title = "Median Reading Time by Word Position and SPR (Faceted by Context)",
    x = "Word Position",
    y = "Median Reading Time (ms)",
    color = "SPR Condition"
  ) +
  theme_minimal()




getwd()



###### i forgot about the survey whoops
# install.packages(c("tidyverse", "readr", "fs", "jsonlite"))
# Load required libraries
library(tidyverse)
library(readr)
library(fs)

# Set the working directory to the folder containing the R script
setwd(dirname(rstudioapi::getActiveDocumentContext()$path))

# Get a list of all CSV files in the osfstorage-archive folder
csv_files <- dir_ls("osfstorage-archive", glob = "*.csv")

# Function to extract demographic information from a single CSV file
extract_demographics <- function(file_path) {
  data <- read_csv(file_path, col_types = cols(.default = "c"))
  
  # Extract demographic information
  demographics <- data %>%
    filter(trial_type == "survey-html-form") %>%
    select(response) %>%
    mutate(response = gsub("\\{|\\}", "", response)) %>%
    separate(response, into = c("age", "handedness", "native_langs", "fluent_langs"), sep = ",") %>%
    mutate(
      age = as.numeric(str_extract(age, "\\d+")),
      handedness = str_extract(handedness, "(?<=:).*"),
      native_langs = str_extract(native_langs, "(?<=:).*"),
      fluent_langs = str_extract(fluent_langs, "(?<=:).*")
    )
  
  # Add file name to the demographics data
  demographics$file_name <- basename(file_path)
  
  return(demographics)
}

# Apply the function to all CSV files and combine the results
all_demographics <- map_df(csv_files, extract_demographics, .id = "file_index")

# Clean up the data
all_demographics <- all_demographics %>%
  mutate(across(everything(), ~str_trim(.x))) %>%
  mutate(across(everything(), ~na_if(.x, ""))) %>%
  mutate(age = as.numeric(age))  # Ensure age is numeric

# Summarize demographic information
summary_stats <- all_demographics %>%
  summarise(
    total_participants = n(),
    mean_age = mean(age, na.rm = TRUE),
    median_age = median(age, na.rm = TRUE),
    right_handed = sum(handedness == "Sağ", na.rm = TRUE),
    left_handed = sum(handedness == "Sol", na.rm = TRUE)
  )

print(summary_stats)

# Plot age distribution
ggplot(all_demographics, aes(x = age)) +
  geom_histogram(binwidth = 5, fill = "skyblue", color = "black") +
  labs(title = "Age Distribution of Participants", x = "Age", y = "Count")

# Plot handedness distribution
ggplot(all_demographics, aes(x = handedness)) +
  geom_bar(fill = "lightgreen") +
  labs(title = "Handedness Distribution", x = "Handedness", y = "Count")

# Analyze language information
language_data <- all_demographics %>%
  mutate(
    native_langs = strsplit(native_langs, ", "),
    fluent_langs = strsplit(fluent_langs, ", ")
  ) %>%
  unnest(native_langs) %>%
  unnest(fluent_langs)

# Plot native languages
ggplot(language_data, aes(x = native_langs)) +
  geom_bar(fill = "lightpink") +
  labs(title = "Native Languages", x = "Language", y = "Count") +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

# Plot fluent languages
ggplot(language_data, aes(x = fluent_langs)) +
  geom_bar(fill = "lightyellow") +
  labs(title = "Fluent Languages", x = "Language", y = "Count") +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))