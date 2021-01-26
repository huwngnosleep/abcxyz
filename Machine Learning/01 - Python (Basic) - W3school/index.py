
def isRectangle(x1, y1, x2, y2, x3, y3, x4, y4):
    # vector AB
    xAB =  x1 - x2
    yAB = y1 - y2
    # vectorBC
    xBC =  x2 - x3
    yBC =  y2 - y3
    # la tu giac phai thoa man 2 dieu kien
    # 1. 3 diem tao thanh 1 tam giac
    # 2. diem con lai khong duoc trung 3 diem kia
    check = 0
    if (xAB * xBC + yAB * yBC != 1) or (xAB * xBC + yAB * yBC != -1):
        check += 1 # thoa man 1 dieu kien
    if (x4 != x1) or (x4 != x2) or (x4 != x3):
        check += 1 # thoa man ca 2 dieu kien
    if (check == 2):
        print(1)
    else:
        print(0) 

isRectangle(10, 10, 20, 10, 20, 20, 10, 20)