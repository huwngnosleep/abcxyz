// trong css có flex: 1 thì trong flutter cũng có FlexFit.tight
// wrap widget vào trong một cái Flexible rồi config như sau
Flexible(
  // cũng có thể set tỉ lệ flex như trong css
  // mặc định flex là 1
  flex: 2,
  fit: FlexFit.tight,
  child: Container(
    child...
  )
)

// thay vì thế dùng Expanded cũng ra kết quả tương tự
Expanded(
  flex: 2,
  child: Container(
    child...
  )
)