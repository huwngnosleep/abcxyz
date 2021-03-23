import { Platform, } from 'react-native'

// conditional rendering
Platform.OS === 'android' ? ... : ...

style={{
    ...styles.container,
    ...Platform.select({
        ios: styles.containerIOS,
        androi: styles.containerAndroid,
    })
}}