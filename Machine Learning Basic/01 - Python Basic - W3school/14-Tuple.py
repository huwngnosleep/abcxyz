# Toán tử của Tuple giống của chuỗi
# cũng giống chuỗi, tuple là Hash Object (không thể thay đổi nội dung)
# nhưng nếu nhét list vào trong một tuple thì có thể thay đổi được
# vì list là unhash object
tup = ([1, 2, 3], [3, 4, 5])
tup[0][1] = 4
print(tup)