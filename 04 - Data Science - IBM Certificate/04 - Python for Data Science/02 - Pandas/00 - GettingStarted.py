import pandas as pd
csv_path = 'file.csv'
df = pd.read_csv(csv_path)
# hiện bảng
df.head()

# dataframe chỉ đơn giản là data biểu diễn dưới dạng table

xlsx_path = 'file.xlsx'
df = pd.read_excel(xlsx_path)
df.head()

songs = {
    'Album': ['song1', 'song2', 'song3'],
    'Released': [1900, 1901, 1902],
    'Length': ['00:42:19', '00:42:19', '00:42:19',]
}

songs_frame = pd.DataFrame(songs)

# select column
y = df['Artist', 'Genre', 'Length']