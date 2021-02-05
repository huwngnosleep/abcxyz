// bình thường có thể dùng mapStateToProps và hàm connect() để lấy state từ store
// nhưng để ngắn gọn hơn thì sẽ dùng hook useSelector()

import { useSelector } from 'react-redux'

const favMeals = useSelector((state) => state.meals.favoritesMeals)

// useSelector() còn có thể nhận một function làm tham số thứ 2
// để làm gì thì chưa biết