// tải font về, giải nén rồi ném vào trong assets

// App.js
import * as Font from 'expo-font'

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })
}

import AppLoading from 'expo-app-loading'

const [dataLoaded, setDataLoaded] = useState(false)

// load data xong mới cho chạy
if(!dataLoaded) {
    return (
        <AppLoading 
            // AppLoading nhận vào props sẽ trigger các hàm
            startAsync={fetchFonts}
            onFinish={() => setDataLoaded(true)}
            onError={(err) => console.log(err)}
        />
    )
}

// thường thì chỗ nào cần đổi font là phải style cho chỗ đấy
// có thể export hẳn font ra một cái constant rồi chỗ nào dùng thì import vào