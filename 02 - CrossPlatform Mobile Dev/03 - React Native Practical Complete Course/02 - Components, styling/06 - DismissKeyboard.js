import { 
    TouchableWithoutFeedback,
    Keyboard,
    View,
} from 'react-native'

// bọc cái Touchable ngoài cùng
// mỗi khi bị touch thì sẽ trigger cái dismiss function

<TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <View>
    
    </View>
</TouchableWithoutFeedback>