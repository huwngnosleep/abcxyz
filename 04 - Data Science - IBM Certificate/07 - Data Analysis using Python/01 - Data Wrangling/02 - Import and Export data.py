# Import
import pandas as pd

url = 'xxxxxx'

# DF without header
df = pd.read_csv(url, header = None)

# some method
# df - print the entire dataframe
# df.head(n) - show the first n rows
# df.tail(n) - show the bottom n rows

# Adding header 
headers = ["header1", "header2", "..."]

df.columns = headers

# Export
path = "C:Windows/.../filename.csv"

df.to_csv(path)