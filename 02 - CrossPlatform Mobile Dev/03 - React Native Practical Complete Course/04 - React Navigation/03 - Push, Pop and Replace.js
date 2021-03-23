props.navigation.navigate({
    routeName: 'MealDetail',
})

// có thể thay thế bằng
props.navigation.push('MealDetail')

// khi dùng navigate bình thường thì từ component không thể tự đi đến chính nó
// còn dùng push thì nó sẽ push một cái bản copy lên đầu stack

// back ra 1 screen
props.navigation.pop()
props.navigation.goBack()

// back đến tận parent
props.navigation.popToTop()

// replace thì không thêm cái gì vào stack, đúng như tên của nó
props.navigation.rePlace('CategoryMeals')

