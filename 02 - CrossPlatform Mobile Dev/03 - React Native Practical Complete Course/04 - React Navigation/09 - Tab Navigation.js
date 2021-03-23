import { createBottomTabNavigator } from 'react-navigation-tabs'

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: MealsStackNavigator,
    Favorites: FavoritesStackNavigator,
})

export default createAppContainer(MealsFavTabNavigator)

// config TabNavigator
Favorites: {
    screen: Favorites,
    navigationOptions: {
        tabBarLabel: "Favorite!!!",
        tabBarIcon: (tabInfo) => {
            return <Ionicons 
                name="ios-star"
                size={25}
                color={tabInfo.tintColor}
            />
        }
    }
},