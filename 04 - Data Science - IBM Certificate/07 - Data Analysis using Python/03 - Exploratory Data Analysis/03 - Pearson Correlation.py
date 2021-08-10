# Pearson Correlation measure the strength of the correlation between 2 variables
# - Correlation coefficient - the direction of the relation ship, -1 -> 1
# - P - value - the certainty of the result

# count Pearson Correlation of two feature
pearson_coef, p_value = stats.pearsonr(df['horsepower'], df['price'])

