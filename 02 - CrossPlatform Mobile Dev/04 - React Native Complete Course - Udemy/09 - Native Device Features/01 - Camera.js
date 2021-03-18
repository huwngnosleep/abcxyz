// expo nó có sẵn các package để dùng native features
// với android thì khi mở cam lên sẽ tự get permit, còn ios thì phải dùng get permit package

import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA)
    if (result.status !== 'granted') {
        Alert.alert(
            'Insufficient permissions!',
            'You need to grant camera permissions to use this app.',
            [{ text: 'Okay' }]
        )
        return false
    }
    return true
}

const takeImageHandler = async () => {
    const isPermit = await verifyPermissions()
    if(!isPermit) {
        return
    }
    const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5,
    })

    setPickedImage(image.uri)
    props.onImageTaken(image.uri)
}