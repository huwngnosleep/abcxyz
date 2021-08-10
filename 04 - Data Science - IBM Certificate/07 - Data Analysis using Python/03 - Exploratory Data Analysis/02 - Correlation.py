# Show correlation between some columns
df[['bore','stroke','compression-ratio','horsepower']].corr()

# Show scatter plot to indicate 
sns.regplot(x="engine-size", y="price", data=df)
plt.ylim(0,)