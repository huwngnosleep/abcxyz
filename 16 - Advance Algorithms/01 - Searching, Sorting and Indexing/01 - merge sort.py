def mergeSort(arr, left, right):
    print("arr: ", arr[left : right + 1])
    if left == right:
        return
    if left + 1 == right:
        if arr[left] > arr[right]:
            swap(arr, left, right)
        return
    else:
        mid = (left + right) // 2
        mergeSort(arr, left, mid)
        mergeSort(arr, mid + 1, right)
        merge(arr, left, mid, right)


def copy_back(arr, sub_arr, left, right):
    j = left
    for i in range(0, len(sub_arr)):
        arr[j] = sub_arr[i]
        j += 1
    print("Copy back: ", arr)


def merge(arr, left, mid, right):
    i = left
    j = mid + 1
    sub_arr = []
    while i <= mid and j <= right:
        if arr[i] < arr[j]:
            sub_arr.append(arr[i])
            i += 1
        else:
            sub_arr.append((arr[j]))
            j += 1
    if i <= mid:
        for i in range(i, mid + 1):
            sub_arr.append(arr[i])
    if j <= right:
        for i in range(j, right + 1):
            sub_arr.append(arr[j])
    print("merge: ", sub_arr)
    copy_back(arr, sub_arr, left, right)


def swap(arr, i, j):
    (arr[i], arr[j]) = (arr[j], arr[i])
    return


mergeSort([1, 8, 2, 3, 7, 6, 4, 5, 9], 0, 8)
