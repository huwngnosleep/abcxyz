// thay vì mapDispatchToProps thì có cách ngắn gọn hơn như sau
import { useDispatch } from 'react-redux'

const dispatch = useDispatch()

const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId))
}, [dispatch, mealId])
