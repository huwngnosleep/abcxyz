// createStackNavigator can tale a second argument which is an object
// inside this object set defaultNavigationOptions

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: Categories,
        navigationOptions: {
            headerTitle: 'Meal Categories',
        },
    },
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primary,
        },
        headerTintColor: 'black',
    },
    // you can also set default screen
    
})

// the below options can be merged