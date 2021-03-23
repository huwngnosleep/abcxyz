const [deviceWidth, setDeviceWith] = useState(Dimensions.get('window').width)
if( deviceWidth > 600 ) {
    return(
        <View style={styles.screen}>
            
        </View>
    )
}

return(
    <View style={styles.screen}>
        
    </View>
)