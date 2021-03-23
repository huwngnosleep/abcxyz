// google static map api
// sẽ nhận được một cái link ảnh, config cái map nhận được với cái link đấy

// còn dynamic map thì dùng package của react native
import MapView, { Marker } from 'react-native-maps'

const mapRegion = {
    latitude: 37,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

<MapView 
    region={mapRegion}
    style={styles.map}
    onPress={selectLocationHandler}
></MapView>