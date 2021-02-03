// npm install react-navigation-header-buttons

// import { HeaderButton } from 'react-navigation-header-buttons'
const CustomHeaderButton = (props) => {
    return(
        <HeaderButton 
            {...props}
            IconComponent={Ionicons}
            iconSize={23} 
            color="black"
        />
    )
}

// navigation options
// import { HeaderButtons, Item } from 'react-navigation-header-buttons'
headerRight: 
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favorite" iconName="ios-star"
            onPress={() => {}} 
        />
    </HeaderButtons>