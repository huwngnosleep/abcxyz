import {TouchableOpacity, Alert, Text} from 'react-native'

return(             // mặc định opacity là 0.2, sửa bằng cách thêm prop
    <TouchableOpacity activeOpacity={0.5} onPress={() => Alert.alert('Clicked!')}>
        <View>
            <Text></Text>
        </View>
    </TouchableOpacity>
)