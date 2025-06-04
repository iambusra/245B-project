# ---- Load and Combine All Participant Data ----

library(dplyr)
library(readr)
library(purrr)
library(stringr)

# Path to folder with all CSVs
csv_folder <- "osfstorage-archive"

# List all CSV files in the folder
csv_files <- list.files(csv_folder, pattern = "\\.csv$", full.names = TRUE)

# Function to read one CSV and add a column with filename
read_participant_csv <- function(file) {
  df <- read_csv(file, show_col_types = FALSE)
  # If prolific_id exists and is not all NA, use that; otherwise, use the filename
  if ("prolific_id" %in% names(df) && any(!is.na(df$prolific_id))) {
    df$participant_id <- df$prolific_id[which(!is.na(df$prolific_id))[1]]
  } else {
    df$participant_id <- str_remove(basename(file), ".csv$")
  }
  # Fix for type mismatches: force these columns to character
  cols_to_fix <- c("participant_group", "context_condition", "spr_condition", "type", "word", "label", "attention_check_result")
  for (col in cols_to_fix) {
    if (col %in% names(df)) {
      df[[col]] <- as.character(df[[col]])
    }
  }
  df
}



# Read and combine all CSVs
all_data <- map_dfr(csv_files, read_participant_csv)

# Check the first few rows
glimpse(all_data)


# Which values are present in the attention_check_result column?
table(all_data$attention_check_result, useNA = "ifany")

# How many attention check trials per participant?
attention_by_pt <- all_data %>%
  filter(!is.na(attention_check_result)) %>%
  group_by(participant_id) %>%
  summarize(attn_checks = n(),
            attn_passed = sum(attention_check_result == "pass"),
            attn_failed = sum(attention_check_result == "fail"))

# See participants with 0, 1, or 2 attention checks
attention_by_pt %>% arrange(attn_checks)

# What are the actual unique values in this column?
unique(all_data$attention_check_result)
summary(is.na(all_data$attention_check_result))

# See a few non-NA values (if any)
all_data %>%
  filter(!is.na(attention_check_result)) %>%
  count(attention_check_result)

# Recalculate, looking for "passed" exactly
attention_by_pt <- all_data %>%
  filter(!is.na(attention_check_result)) %>%
  group_by(participant_id) %>%
  summarize(attn_checks = n(),
            attn_passed = sum(attention_check_result == "passed"))

# Who did not pass both?
to_exclude <- attention_by_pt %>%
  filter(attn_passed < 2) %>%
  pull(participant_id)

cat("Participants to exclude (did not pass both checks):", to_exclude, "\n")
cat("Number to exclude:", length(to_exclude), "\n")

# Exclude these from all_data
clean_data <- all_data %>%
  filter(!(participant_id %in% to_exclude))



# How many left?
clean_data %>%
  distinct(participant_id) %>%
  count()

# Plot
clean_data %>%
  group_by(participant_id) %>%
  summarize(total_trials = n()) %>%
  ggplot(aes(x = total_trials)) +
  geom_histogram(binwidth = 2, fill = "orchid", color = "black") +
  labs(title = "Trials per Participant (After Exclusion)",
       x = "Trials", y = "Count of Participants")

# What unique values do you have for 'type', 'item_id', 'class', 'context_condition', and 'spr_condition'?
unique(clean_data$type)
unique(clean_data$item_id)
unique(clean_data$class)
unique(clean_data$context_condition)
unique(clean_data$spr_condition)


# Baseline/Filler comprehension questions
filler_comprehension <- clean_data %>%
  filter((type == "trial_comprehension" | type == "comprehension") &
           (context_condition == "filler" | spr_condition == "filler"))

# Critical comprehension questions
critical_comprehension <- clean_data %>%
  filter((type == "trial_comprehension" | type == "comprehension") &
           (context_condition %in% c("dere", "dedicto", "amb")) &
           (spr_condition %in% c("dere", "dedicto", "amb")))

# Accuracy and RT summaries for each group
library(dplyr)

# Filler/Baseline
filler_acc <- mean(filler_comprehension$response_correct == TRUE, na.rm = TRUE)
filler_rt  <- median(filler_comprehension$response_time, na.rm = TRUE)

# Critical
critical_acc <- mean(critical_comprehension$response_correct == TRUE, na.rm = TRUE)
critical_rt  <- median(critical_comprehension$response_time, na.rm = TRUE)

cat(sprintf("Filler accuracy: %.2f%%, median RT: %.0f ms\n", filler_acc*100, filler_rt))
cat(sprintf("Critical accuracy: %.2f%%, median RT: %.0f ms\n", critical_acc*100, critical_rt))


library(ggplot2)
# Stack for plotting
plot_comprehension <- bind_rows(
  filler_comprehension %>%
    mutate(group = "Filler"),
  critical_comprehension %>%
    mutate(group = "Critical")
)

# Accuracy violin plot
ggplot(plot_comprehension, aes(x = group, y = as.numeric(response_correct))) +
  geom_violin(fill = "turquoise", alpha = 0.6, trim = FALSE) +
  geom_jitter(width = 0.1, height = 0.02, alpha = 0.4) +
  stat_summary(fun = mean, geom = "point", shape = 21, fill = "black", size = 3) +
  labs(title = "Comprehension Accuracy: Filler vs. Critical",
       y = "Accuracy (1 = correct)", x = "")

# Response time violin plot
ggplot(plot_comprehension, aes(x = group, y = response_time)) +
  geom_violin(fill = "plum", alpha = 0.6, trim = FALSE) +
  geom_jitter(width = 0.1, alpha = 0.4) +
  stat_summary(fun = median, geom = "point", shape = 21, fill = "black", size = 3) +
  labs(title = "Comprehension RT: Filler vs. Critical",
       y = "Response time (ms)", x = "")


# Set bounds
lower_bound <- 50
upper_bound <- 10000  # or 2000, if you prefer

# Trim outliers for RT
filler_comprehension_trim <- filler_comprehension %>%
  filter(response_time >= lower_bound, response_time <= upper_bound)

critical_comprehension_trim <- critical_comprehension %>%
  filter(response_time >= lower_bound, response_time <= upper_bound)

# Quick re-calc of medians
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
  labs(title = "Comprehension RT: Filler vs. Critical (Trimmed)",
       y = "Response time (ms)", x = "")


table(clean_data$type, useNA = "ifany")
summary(clean_data$reading_time)


# Select SPR trials only (both "trial_spr" and "spr")
spr_data <- clean_data %>%
  filter(type %in% c("trial_spr", "spr")) %>%
  # Exclude missing RTs and RT outliers (50–2000 ms, per your plan)
  filter(!is.na(reading_time), reading_time >= 50, reading_time <= 2000)


# How many trials remain?
cat("SPR trials after cleaning:", nrow(spr_data), "\n")
# How many unique participants?
cat("Participants in cleaned SPR data:", n_distinct(spr_data$participant_id), "\n")
# Distribution of RTs
summary(spr_data$reading_time)


ggplot(spr_data, aes(x = reading_time, fill = spr_condition)) +
  geom_histogram(binwidth = 50, color = "black", alpha = 0.6, position = "identity") +
  facet_wrap(~spr_condition) +
  labs(title = "Self-Paced Reading Time by SPR Condition",
       x = "Reading Time (ms)", y = "Count") +
  theme_minimal()


# If you have a word position column (e.g., region_id or something similar)
# If not, we can create one by group

# Example: create word_position within each sentence
spr_data <- spr_data %>%
  group_by(participant_id, item_id) %>%
  mutate(word_position = row_number()) %>%
  ungroup()

# Plot average RT by word position, by condition
ggplot(spr_data, aes(x = word_position, y = reading_time, color = spr_condition)) +
  stat_summary(fun = mean, geom = "line", size = 1) +
  labs(title = "Average Reading Time by Word Position and Condition",
       x = "Word Position", y = "Mean Reading Time (ms)", color = "Condition") +
  theme_minimal()


# List of tokens to exclude (case-insensitive)
junk_tokens <- c("A:", "yani!", "Demek", "Desene", "hep!", "demek!", "ha!", "Yani")

spr_data_clean <- spr_data %>%
  filter(!(tolower(word) %in% tolower(junk_tokens)))


spr_data_clean %>%
  filter(word_position == 1) %>%
  count(spr_condition, word, sort = TRUE)


# Average RT per item (across all words/participants)
item_rts <- spr_data_clean %>%
  filter(spr_condition %in% c("dere", "dedicto", "amb")) %>%  # focus on experiment items
  group_by(item_id) %>%
  summarize(mean_rt = mean(reading_time, na.rm = TRUE),
            n = n())

ggplot(item_rts, aes(x = reorder(item_id, mean_rt), y = mean_rt)) +
  geom_col(fill = "skyblue") +
  labs(title = "Mean SPR RT by Item (experiment only)",
       x = "Item ID", y = "Mean Reading Time (ms)") +
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
  labs(title = "Mean SPR RT by Verb Class (experiment only)",
       x = "Verb Class", y = "Mean Reading Time (ms)") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 30, hjust = 1))


ggplot(
  spr_data_clean %>% filter(spr_condition %in% c("dere", "dedicto", "amb")),
  aes(x = reorder(item_id, reading_time, FUN = median), y = reading_time)
) +
  geom_boxplot(outlier.shape = 21, outlier.colour = "red", fill = "lightblue") +
  labs(title = "SPR RT Distributions by Item (experiment only)",
       x = "Item ID", y = "Reading Time (ms)") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 90))

# All comprehension question trials (filler + critical)
all_comprehension <- clean_data %>%
  filter(type %in% c("trial_comprehension", "comprehension")) %>%
  filter(!is.na(item_id))  # remove any with missing item id

# Per item, overall
comp_by_item <- all_comprehension %>%
  group_by(item_id) %>%
  summarize(
    mean_acc = mean(response_correct == TRUE, na.rm = TRUE),
    n = n(),
    mean_rt = mean(response_time, na.rm = TRUE),
    sd_rt = sd(response_time, na.rm = TRUE)
  )

# Plot accuracy per item
ggplot(comp_by_item, aes(x = reorder(item_id, mean_acc), y = mean_acc)) +
  geom_col(fill = "orchid") +
  labs(title = "Comprehension Accuracy by Item",
       x = "Item ID", y = "Accuracy") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 90))


# Per class (include fillers, experimentals, everything)
comp_by_class <- all_comprehension %>%
  group_by(class) %>%
  summarize(
    mean_acc = mean(response_correct == TRUE, na.rm = TRUE),
    n = n(),
    mean_rt = mean(response_time, na.rm = TRUE),
    sd_rt = sd(response_time, na.rm = TRUE)
  )

# Plot
ggplot(comp_by_class, aes(x = reorder(class, mean_acc), y = mean_acc, fill = class)) +
  geom_col(show.legend = FALSE) +
  labs(title = "Comprehension Accuracy by Verb Class",
       x = "Verb Class", y = "Accuracy") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 30, hjust = 1))
# Per condition (critical/filler)
comp_by_cond <- all_comprehension %>%
  group_by(spr_condition) %>%
  summarize(
    mean_acc = mean(response_correct == TRUE, na.rm = TRUE),
    n = n(),
    mean_rt = mean(response_time, na.rm = TRUE),
    sd_rt = sd(response_time, na.rm = TRUE)
  )

# Plot
ggplot(comp_by_cond, aes(x = spr_condition, y = mean_acc, fill = spr_condition)) +
  geom_col(show.legend = FALSE) +
  labs(title = "Comprehension Accuracy by SPR Condition",
       x = "Condition", y = "Accuracy") +
  theme_minimal()


# Per item & condition
comp_by_item_cond <- all_comprehension %>%
  group_by(item_id, spr_condition) %>%
  summarize(
    mean_acc = mean(response_correct == TRUE, na.rm = TRUE),
    n = n(),
    mean_rt = mean(response_time, na.rm = TRUE)
  )

# Plot (can get crowded if many items—try one class for clarity)
ggplot(comp_by_item_cond, aes(x = spr_condition, y = mean_acc, fill = spr_condition)) +
  geom_col(show.legend = FALSE, position = "dodge") +
  facet_wrap(~item_id) +
  labs(title = "Comprehension Accuracy by Item & Condition",
       x = "Condition", y = "Accuracy") +
  theme_minimal()


# Filter to experimental conditions ONLY
spr_data_exp <- spr_data_clean %>%
  filter(spr_condition %in% c("amb", "dedicto", "dere"))

# Redo word position (in case previous calculations included fillers)
spr_data_exp <- spr_data_exp %>%
  group_by(participant_id, item_id) %>%
  mutate(word_position = row_number()) %>%
  ungroup()

# Filter to experimental SPR trials only, and recalculate word positions
spr_data_exp <- spr_data_clean %>%
  filter(spr_condition %in% c("amb", "dedicto", "dere")) %>%
  group_by(participant_id, item_id) %>%
  mutate(word_position = row_number()) %>%
  ungroup()


# Plot again
library(ggplot2)
ggplot(spr_data_exp, aes(x = word_position, y = reading_time, color = spr_condition)) +
  stat_summary(fun = mean, geom = "line", linewidth = 1.1) +
  labs(title = "Mean SPR RT by Word Position (Critical Conditions Only)",
       x = "Word Position", y = "Mean Reading Time (ms)", color = "Condition") +
  theme_minimal()




# i hate this
spr_data_core <- spr_data_exp %>%
  filter(context_condition %in% c("dere", "dedicto"),
         spr_condition %in% c("dere", "dedicto")) %>%
  mutate(
    match_type = ifelse(context_condition == spr_condition, "matched", "mismatched")
  )

ggplot(spr_data_core, aes(x = match_type, y = reading_time, fill = match_type)) +
  geom_violin(trim = FALSE, alpha = 0.7, color = "black") +
  stat_summary(fun = mean, geom = "point", shape = 21, size = 3, fill = "white") +
  labs(title = "SPR Reading Time: Matched vs. Mismatched",
       x = "", y = "Reading Time (ms)") +
  theme_minimal()


ggplot(spr_data_core, aes(x = word_position, y = reading_time, color = match_type)) +
  stat_summary(fun = mean, geom = "line", linewidth = 1.2) +
  labs(title = "SPR RT by Word Position: Matched vs. Mismatched",
       x = "Word Position", y = "Mean Reading Time (ms)", color = "Type") +
  theme_minimal()


# Get comprehension question data for matched/mismatched
comp_core <- all_comprehension %>%
  filter(context_condition %in% c("dere", "dedicto"),
         spr_condition %in% c("dere", "dedicto")) %>%
  mutate(
    match_type = ifelse(context_condition == spr_condition, "matched", "mismatched")
  )

# Accuracy & RT
comp_core %>%
  group_by(match_type) %>%
  summarize(
    accuracy = mean(response_correct == TRUE, na.rm = TRUE),
    median_rt = median(response_time, na.rm = TRUE),
    n = n()
  )


ggplot(comp_core, aes(x = match_type, y = as.numeric(response_correct), fill = match_type)) +
  geom_violin(trim = FALSE, alpha = 0.7, color = "black") +
  stat_summary(fun = mean, geom = "point", shape = 21, size = 3, fill = "white") +
  labs(title = "Comprehension Accuracy: Matched vs. Mismatched",
       x = "", y = "Accuracy") +
  theme_minimal()




# For SPR
spr_data_exp <- spr_data_clean %>%
  filter(spr_condition %in% c("amb", "dedicto", "dere"),
         context_condition %in% c("amb", "dedicto", "dere")) %>%
  group_by(participant_id, item_id) %>%
  mutate(word_position = row_number()) %>%
  ungroup() %>%
  mutate(
    context_spr_combo = paste(context_condition, spr_condition, sep = "_")
  )

# For Comprehension
comp_data_exp <- all_comprehension %>%
  filter(spr_condition %in% c("amb", "dedicto", "dere"),
         context_condition %in% c("amb", "dedicto", "dere")) %>%
  mutate(
    context_spr_combo = paste(context_condition, spr_condition, sep = "_")
  )


spr_summary <- spr_data_exp %>%
  group_by(context_spr_combo) %>%
  summarize(
    mean_rt = mean(reading_time, na.rm = TRUE),
    median_rt = median(reading_time, na.rm = TRUE),
    sd_rt = sd(reading_time, na.rm = TRUE),
    n = n()
  )
print(spr_summary)


library(ggplot2)
ggplot(spr_data_exp, aes(x = context_spr_combo, y = reading_time, fill = context_condition)) +
  geom_violin(trim = FALSE, alpha = 0.7) +
  stat_summary(fun = mean, geom = "point", shape = 21, size = 2, fill = "white") +
  labs(title = "SPR RT by Context + SPR Condition",
       x = "Context + SPR Condition", y = "Reading Time (ms)") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))


comp_summary <- comp_data_exp %>%
  group_by(context_spr_combo) %>%
  summarize(
    accuracy = mean(response_correct == TRUE, na.rm = TRUE),
    median_rt = median(response_time, na.rm = TRUE),
    n = n()
  )
print(comp_summary)


ggplot(comp_data_exp, aes(x = context_spr_combo, y = as.numeric(response_correct), fill = context_condition)) +
  geom_violin(trim = FALSE, alpha = 0.7) +
  stat_summary(fun = mean, geom = "point", shape = 21, size = 2, fill = "white") +
  labs(title = "Comprehension Accuracy by Context + SPR Condition",
       x = "Context + SPR Condition", y = "Accuracy") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

# Clean comprehension RTs for context+spr combos
comp_data_exp_trim <- comp_data_exp %>%
  filter(response_time >= 50, response_time <= 10000)



# Plot (trimmed)
ggplot(comp_data_exp_trim, aes(x = context_spr_combo, y = response_time, fill = context_condition)) +
  geom_violin(trim = FALSE, alpha = 0.7) +
  stat_summary(fun = median, geom = "point", shape = 21, size = 2, fill = "white") +
  labs(title = "Comprehension RT by Context + SPR Condition (trimmed)",
       x = "Context + SPR Condition", y = "Response Time (ms)") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))


comp_summary_trim <- comp_data_exp_trim %>%
  group_by(context_spr_combo) %>%
  summarize(
    accuracy = mean(response_correct == TRUE, na.rm = TRUE),
    median_rt = median(response_time, na.rm = TRUE),
    n = n()
  )
print(comp_summary_trim)


# RT summary
comp_summary_rt <- comp_data_exp_trim %>%
  group_by(context_spr_combo, context_condition) %>%
  summarize(
    mean_rt = mean(response_time, na.rm = TRUE),
    se_rt = sd(response_time, na.rm = TRUE) / sqrt(n()),
    n = n()
  ) %>%
  mutate(
    ci_rt = se_rt * 1.96 # 95% CI
  )

# Accuracy summary
comp_summary_acc <- comp_data_exp_trim %>%
  group_by(context_spr_combo, context_condition) %>%
  summarize(
    mean_acc = mean(response_correct == TRUE, na.rm = TRUE),
    se_acc = sd(response_correct == TRUE, na.rm = TRUE) / sqrt(n()),
    n = n()
  ) %>%
  mutate(
    ci_acc = se_acc * 1.96 # 95% CI
  )


ggplot(comp_summary_rt, aes(x = context_spr_combo, y = mean_rt, fill = context_condition)) +
  geom_col(alpha = 0.8) +
  geom_errorbar(aes(ymin = mean_rt - ci_rt, ymax = mean_rt + ci_rt), width = 0.2) +
  labs(title = "Comprehension RT (trimmed): Mean ± 95% CI",
       x = "Context + SPR Condition", y = "Mean Response Time (ms)") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))



ggplot(comp_summary_acc, aes(x = context_spr_combo, y = mean_acc, fill = context_condition)) +
  geom_col(alpha = 0.8) +
  geom_errorbar(aes(ymin = mean_acc - ci_acc, ymax = mean_acc + ci_acc), width = 0.2) +
  labs(title = "Comprehension Accuracy: Mean ± 95% CI",
       x = "Context + SPR Condition", y = "Mean Accuracy") +
  theme_minimal() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))



# LÜTFEN ÇALIŞ ARTIK İMDATTTTTTTT
library(lme4)
library(lmerTest)
library(emmeans)

# Filter to critical word positions if desired, e.g.:
# spr_data_exp %>% filter(word_position == YOUR_CRITICAL_REGION)
# Here, let's use all (or specify e.g. 5th word)

lmm_spr <- lmer(reading_time ~ context_condition * spr_condition +
                  (1 | participant_id) + (1 | item_id),
                data = spr_data_exp)

summary(lmm_spr)
anova(lmm_spr)


emm <- emmeans(lmm_spr, ~ context_condition * spr_condition)
pairs(emm, simple = "each")


library(lme4)
# Use comp_data_exp_trim (or not trimmed if you prefer)

glmm_acc <- glmer(response_correct ~ context_condition * spr_condition +
                    (1 | participant_id) + (1 | item_id),
                  data = comp_data_exp_trim, family = binomial)

summary(glmm_acc)
anova(glmm_acc, test = "Chisq")


emm_acc <- emmeans(glmm_acc, ~ context_condition * spr_condition, type = "response")
pairs(emm_acc, simple = "each")


lmm_comp_rt <- lmer(response_time ~ context_condition * spr_condition +
                      (1 | participant_id) + (1 | item_id),
                    data = comp_data_exp_trim)

summary(lmm_comp_rt)
anova(lmm_comp_rt)




library(emmeans)
emm_df <- as.data.frame(emmeans(lmm_comp_rt, ~ context_condition * spr_condition))
ggplot(emm_df, aes(x = spr_condition, y = emmean, fill = context_condition)) +
  geom_bar(stat = "identity", position = "dodge") +
  geom_errorbar(aes(ymin = emmean - SE, ymax = emmean + SE), 
                position = position_dodge(width=0.9), width=0.2) +
  labs(y = "Estimated Mean RT (ms)", x = "SPR Condition", fill = "Context")



glmm_acc2 <- glmer(response_correct ~ context_condition * spr_condition +
                     (1 | participant_id) + (1 | item_id),
                   data = comp_data_exp_trim, family = binomial,
                   control = glmerControl(optimizer="bobyqa"))



comp_data_exp_trim$combo <- paste(comp_data_exp_trim$context_condition, comp_data_exp_trim$spr_condition, sep="_")
comp_data_exp_trim$surprisal_type <- dplyr::case_when(
  # Matched: context and SPR are the same
  comp_data_exp_trim$context_condition == comp_data_exp_trim$spr_condition ~ "matched",
  # Opposite: de re vs de dicto
  (comp_data_exp_trim$context_condition == "dere" & comp_data_exp_trim$spr_condition == "dedicto") |
    (comp_data_exp_trim$context_condition == "dedicto" & comp_data_exp_trim$spr_condition == "dere") ~ "mismatched_opposite",
  # If ambiguous is anywhere
  comp_data_exp_trim$context_condition == "amb" | comp_data_exp_trim$spr_condition == "amb" ~ "ambiguous",
  # All other mismatches
  TRUE ~ "mismatched"
)
table(comp_data_exp_trim$surprisal_type)

install.packages("brms")
library(brms)
# (Log-transform RT for stability)
comp_data_exp_trim$log_response_time <- log(comp_data_exp_trim$response_time + 1)

bayes_rt <- brm(
  log_response_time ~ surprisal_type + (1|participant_id) + (1|item_id),
  data = comp_data_exp_trim, cores = 4, chains = 4, iter = 4000
)
summary(bayes_rt)





bayes_acc <- brm(
  response_correct ~ surprisal_type + (1|participant_id) + (1|item_id),
  data = comp_data_exp_trim, family = bernoulli(), cores = 4, chains = 4, iter = 4000
)
summary(bayes_acc)

bayesfactor_models(bayes_rt, null_model = update(bayes_rt, . ~ 1))

hypothesis(bayes_rt, "surprisal_typeambiguous > surprisalt_typematched")
hypothesis(bayes_rt, "surprisal_typemismatched > surprisal_typeambiguous")

# Plot posterior means and intervals
plot(conditional_effects(bayes_rt), points = TRUE)
plot(conditional_effects(bayes_acc), points = TRUE)

library(tidybayes)
library(ggplot2)
add_epred_draws(comp_data_exp_trim, bayes_rt, re_formula = NA) %>%
  ggplot(aes(x = surprisal_type, y = .epred)) +
  stat_halfeye() +
  labs(y = "Estimated log RT", x = "Condition")

install.packages("tidybayes")
library(emmeans)
library(tidybayes)

emmeans_rt <- emmeans(bayes_rt, ~ surprisal_type)
summary(emmeans_rt)
# Get posterior draws for plots
emmeans_draws <- gather_emmeans_draws(emmeans_rt)
library(ggplot2)
ggplot(emmeans_draws, aes(x = surprisal_type, y = exp(.value))) +
  stat_halfeye(.width = .95, fill = "skyblue") +
  labs(y = "Estimated RT (ms)", x = "Condition", title = "Posterior distributions of mean RTs") +
  theme_minimal()


hypothesis(bayes_rt, "surprisal_typematched < 0 & surprisal_typemismatched_opposite > 0")


# Pairwise contrasts on log scale, or back-transform if you want
pairs(emmeans_rt)

install.packages("bayestestR")
library(bayestestR)

bayesfactor_models(bayes_rt, null_model = update(bayes_rt, . ~ 1))


library(ggplot2)
library(tidybayes)
emmeans_draws <- gather_emmeans_draws(emmeans_rt)

ggplot(emmeans_draws, aes(x = surprisal_type, y = exp(.value))) +
  stat_halfeye(.width = .95, fill = "skyblue") +
  labs(y = "Estimated RT (ms)", x = "Condition", title = "Posterior distributions of mean RTs") +
  theme_minimal()


emmeans_acc <- emmeans(bayes_acc, ~ surprisal_type, type = "response")
summary(emmeans_acc)


acc_draws <- gather_emmeans_draws(emmeans_acc)
ggplot(acc_draws, aes(x = surprisal_type, y = .value)) +
  stat_halfeye(.width = .95, fill = "orchid") +
  labs(y = "Predicted Accuracy", x = "Condition", title = "Posterior Accuracy by Condition") +
  theme_minimal()




# Get posterior summaries on probability scale
emmeans_acc <- emmeans(bayes_acc, ~ surprisal_type, type = "response")

# Tidy draws for plotting
acc_draws <- gather_emmeans_draws(emmeans_acc)

# Plot: posterior distributions of mean accuracy
ggplot(acc_draws, aes(x = surprisal_type, y = .value, fill = surprisal_type)) +
  stat_halfeye(.width = .95, point_interval = mean_qi, color = "black") +
  labs(
    title = "Posterior distributions of mean Accuracy",
    x = "Condition", y = "Estimated Accuracy"
  ) +
  scale_fill_brewer(type = "qual", palette = "Set2") +
  theme_minimal()



# RT (already on log scale, so exponentiate to get ms if you want)
emmeans_rt_tbl <- summary(emmeans_rt)
emmeans_rt_tbl$mean_ms <- exp(emmeans_rt_tbl$emmean)

# Accuracy
emmeans_acc_tbl <- summary(emmeans_acc)
emmeans_acc_tbl




rt_contrasts <- contrast(emmeans_rt, method = "pairwise")
summary(rt_contrasts)

acc_contrasts <- contrast(emmeans_acc, method = "pairwise")
summary(acc_contrasts)


