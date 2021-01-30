// STYLE TRONG REACT NATIVE KHÔNG CÓ INHERIT

// phải dùng cái stylesheet thay vì object bình thường để react-native chuyển về style của native
// chứ không phải là css như web
// dùng constructor tạo style
// truyền vào trong style một cái object
const styles = StyleSheet.create({
    categoryImage: {
        width: 64,
        height: 64,
    }
})