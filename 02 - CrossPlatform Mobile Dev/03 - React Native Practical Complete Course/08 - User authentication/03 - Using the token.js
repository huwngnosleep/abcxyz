// vào firebase console, set up cái rules thành chỉ auth mới có quyền sửa

// thì để write vào database, user cần phải được check token đúng mới sửa được

// Redux Thunk cho phép cái dispatch nhận vào argument thứ hai là một function 
// giúp get ra state hiện tại trong store
// lấy token
const token = getState().auth.token

// thì trong cái url edit product thêm cái đuôi này

?auth=${token}

// thì firebase sẽ tự biết cho user đấy quyền để write