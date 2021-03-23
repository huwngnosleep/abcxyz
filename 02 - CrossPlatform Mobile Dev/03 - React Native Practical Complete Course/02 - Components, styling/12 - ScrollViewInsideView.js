// khi wrap một cái ScrollView vào trong cái View như này
// thì Androi sẽ không scroll được còn IOS thì vẫn được
<View style={styles.list}>
    <ScrollView>
        
    </ScrollView>
</View>

// chỉ cần style cho cái view flex 1 là được
list: {
    width: '80%',
    flex: 1,
},