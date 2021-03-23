// truyền các tham số vào params object
// chỉ cái screen được đặt vào stack mới có thể lấy props.navigation
props.navigation.navigate({
    routeName: 'CategoryMeals',
    params: {
        categoryId: itemData.item.id,
    }
})

// rồi lấy nó ra bằng method getParam()
const categoryId = props.navigation.getParam('categoryId')
