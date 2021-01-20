import {FlatList, ScrollView} from 'react-native'

{categories} = this.state
return(
    <View>
        <ScrollView>
            <FlatList 
                data={categories}    // truyền cả cái object item vào làm props rồi hiển thị nó ở trong component con
                renderItem={({item}) => <CategoryListItem category={item} />}
                // và thêm một cái key để làm gì thì chưa biết
                keyExtractor={item => item.id}
            />
        </ScrollView>

    </View>
)