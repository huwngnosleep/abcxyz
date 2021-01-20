return(
    <View >
        <Image styles={styles.categoryImage} />
    </View>
)

// dùng constructor tạo style
// truyền vào trong style một cái object
const styles = StyleSheet.create({
    categoryImage: {
        width: 64,
        height: 64,
    }
})