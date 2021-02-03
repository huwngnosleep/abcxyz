// navigation options also can be a function returning an object
// navigationData is equal to props

CategoryMeals.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find((item) => item.id === categoryId)

    return {
        headerTitle: selectedCategory.title
    }
}

