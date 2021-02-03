import { createAppContainer, } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
// luôn phải có cái app container
// dùng navigator loại nào thì phải cài độc lập ( từ version 4.x trở lên)

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
})

export default createAppContainer(MealsNavigator)
