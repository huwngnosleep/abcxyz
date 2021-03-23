<Button 
    title="Go to meals!" 
    onPress={() => {
        props.navigation.navigate({routeName: 'CategoryMeals'})
        // trong props có một cái object là navigation
        // trong navigation lại có tham số là navigate
        // navigate nhận vào một object
    }}
/>

// có thể làm ngắn gọn hơn là
props.navigation.navigate('CategoryMeals')
