// có thể config cho cái app quay ngang quay dọc được hay không trong app.json
"orientation"
import { Dimensions } from "react-native"

: "default",
// default, portrait, landscape

const [buttonWidth, setButtonWidth] = useState(deviceWidth / 4)
// cho style theo state
Dimensions.addEventListener('change', updateLayout)

// remove để chỉ tồn tại 1 event listener
useEffect(() => {
    Dimensions.addEventListener('change', updateLayout)
    return () => {
        Dimensions.removeEventListener('change', updateLayout)
    }
})
// cho useEffect return một cái cleaner
// để đảm bảo mọi effect sẽ được clean khi component unmount

<View style={{...styles.button ,width: buttonWidth}}>
    <MainButton onPress={confirmButtonHandler}>Confirm</MainButton>
</View>