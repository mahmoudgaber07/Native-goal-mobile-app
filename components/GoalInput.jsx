import React from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";
import { Image } from "react-native";
import { useState } from "react";

export const GoalInput = ({ onAddGoal, showModal ,cancelModel}) => {
  const [inputData, setInputData] = useState("");

  const inputHandler = (e) => {
    setInputData(e);
  };

  const AddInputHandler = () => {
    onAddGoal(inputData);
    setInputData("");
    cancelModel();
  };

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <TextInput
          placeholder="Your Goals"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={inputData}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
          <Button title="Cancel" color="#f31282" onPress={cancelModel}></Button>
          </View>
        <View style={styles.btn}>  
          <Button
            title="Add Goal"
            color="#5e0acc"
            onPress={AddInputHandler}
            style={styles.btn}
            ></Button>
            </View>
            </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
   backgroundColor:'#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius:6,
    width: "80%",
    padding:8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  btn: {
    width: 100,
    marginHorizontal:8,
  },
  logo: {
    width: 100,
    height: 80,
    marginBottom: 40,
  }
});
