import { ActivityIndicator } from 'react-native'

// state
if (isLoading) {
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color={Colors.primary} />
    </View>
}

// nhớ set lại cái isloading là false