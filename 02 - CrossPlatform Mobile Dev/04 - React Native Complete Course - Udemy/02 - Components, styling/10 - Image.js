// local image thì dùng hàm require
<View style={styles.imageContainer}>
    <Image
        style={styles.image} 
        source={require('../assets/success.png')} 
    />
</View>

// network image thì truyền vào một cái object
source={{uri: 'url'}} 

// style
imageContainer: {
    width: 300,
    height: 300,
    // react native không nhận border radius là phần trăm
    borderRadius: 150,
    borderWidth: 3,
    // overflow hidden là để khi cái ảnh quá to thì nó vẫn không bị tràn ra ngoài
    overflow: 'hidden',
    marginVertical: 20,
},
image: {
    // set cái ảnh fit đúng hết container của nó
    height: '100%',
    width: '100%',
},