import React, { useState } from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  TextInput, 
  Button, 
  ScrollView, 
  FlatList, 
  Modal,
} from 'react-native';

const App = () => {
  const [todo, setTodo] = useState('')
  const [todoItems, setItems] = useState([])
  const [visible, setVisible] = useState(false)
  
  const inputHandler = (input) => {
    setTodo(input)
  }
  const addButtonHandler = () => {
    if(todo !== '') {
      setItems([...todoItems, todo])
      setTodo('')
    } 
  }
  const clearButtonHandler = () => {
    setItems([])
  }

  return (
    <View style={{marginTop: 100}}>
      <Button onPress={() => setVisible(!visible)} title="Add new task"/>
      <Modal visible={visible} animationType="fade">
        <View style={styles.container}>
          <TextInput 
            onChangeText={inputHandler}
            style={styles.input}
            placeholder="Add new item"
            value={todo}
          />
          <Button
            onPress={() => {addButtonHandler; setVisible(!visible)}} 
            title="ADD" 
          />
        </View>
      </Modal>
      
      <View>
        <Button 
          onPress={clearButtonHandler}
          title="X"
        />
      </View>
      <FlatList 
        data={todoItems}
        renderItem={(items) => (
          <View style={styles.listItem}>
            <Text>{items.item}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    margin: 20,
  },
  input: {
    flex: 1,
    padding: 3,
    borderColor: '#333',
    borderWidth: 1,
    margin: 5,
  },
  listItem: {
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    borderBottomColor: 'black',
    borderWidth: 1,
  },

});

export default App