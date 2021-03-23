import * as FileSystem from 'expo-file-system'
// đương nhiên là vẫn phải get permission

// moveAsync nhận vào một object là config cho cái move đấy
const fileName = image.split('/').pop()
const newPath = FileSystem.documentDirectory + fileName

try {
    await FileSystem.moveAsync({
        from: image,
        to: newPath,
    })
    
} catch (error) {
    console.log(error)
    throw error
}