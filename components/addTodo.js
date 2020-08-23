import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage, Alert } from 'react-native';
import Toast from 'react-native-whc-toast';

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }
    return (
      <View>
        <TextInput
          style={StyleSheet.input}
          placeholder="New Todo..."
          onChangeText={changeHandler}
        />
        <Button onPress={() => submitHandler(text)} title='Add' color='coral'/>
      </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

