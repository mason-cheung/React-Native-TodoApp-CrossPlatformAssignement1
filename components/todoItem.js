import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  CheckBox,
  Alert
} from "react-native";



export default function TodoItem({ item, pressHandler }) {
    const deleteTask = () => {
        Alert.alert(
            "Delete?",
            "Do you want to delete this task?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "delete", onPress: () => pressHandler(item.key) }
            ],
            { cancelable: false }
          );
    }
  return (
    <TouchableOpacity onPress={deleteTask}>
      <Text style={styles.item}>{item.text}</Text>
      <CheckBox
        value={false}
        style={styles.checkbox}
      ></CheckBox>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    flexDirection: "row",
  },
  checkbox: {
    alignSelf: "flex-end",
  },
  itemCross: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    flexDirection: "row",
    textDecorationLine: 'line-through', textDecorationStyle: 'solid'
  },
});

