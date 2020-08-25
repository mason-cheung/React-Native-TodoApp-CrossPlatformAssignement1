import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage, Alert, TouchableOpacity } from 'react-native';

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="New Todo..."
          onChangeText={changeHandler}
        />
        <TouchableOpacity style={styles.button} onPress={() => submitHandler(text)}>
          <Text style={{ color: "white", fontSize: 14 }}>ADD</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    height: 46,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 6,
    fontSize: 17,
  },
  button: {
    borderRadius: 6,
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingVertical: 10,
    paddingHorizontal: 32,
  },
});

