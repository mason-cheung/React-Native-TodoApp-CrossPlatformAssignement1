import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList ,Alert, AsyncStorage, Modal, CheckBox } from 'react-native';
import Toast from 'react-native-simple-toast';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([]);


  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
    //this.storeTodo()
    Toast.show('TODOS Deleted!', 500);
  }

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      })
      //this.storeTodo()
      Toast.show('TODOS Added!', 500);
    } else {
      Alert.alert('Oops!', 'Todos must be over 3 chars long!', [
        {text: 'Understood', onPress: () => console.log('Alert closed')}
      ]);
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item } ) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

storeTodo = async (todos) => {
  try {
    const jsonValue = JSON.stringify(todos)
    await AsyncStorage.setItem(key, jsonValue);
  } catch(error) {
    console.log(error)
  }
}

retrieveTodo = async () => {
  try {
    const items = await AsyncStorage.getItem(key);
    this.setState({expenseAmount:0})
    return items != null ? JSON.parse(items) : null
  } catch (error) {
    // Error retrieving data
    console.log(error)
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
