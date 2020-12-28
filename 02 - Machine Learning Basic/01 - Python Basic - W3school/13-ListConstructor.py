# List constructor
a = 'Hungdzz'
print(list(a))

a = [1, 2, 3]
b = a
b[1] = 'Hung dzz'
print(b)
print(a)

# Vì list là kiểu tham chiếu nên nếu gán = thì sẽ là hai biến dùng cùng một vùng nhớ
# nên bản chất vẫn chỉ là 1 biến

# => phải dùng constructor để copy một list hoàn toàn mới
a = [1, 2, 3]
b = list(a)
b[1] = 'Hung dzz'
print(b)
print(a)
