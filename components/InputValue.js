import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

export const InputValue = ({ addGoalHandler, isModal, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={isModal} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={() => {
                addGoalHandler(enteredGoal);
                setEnteredGoal("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="tomato" onPress={onCancel} />
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
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",

    justifyContent: "space-around",
    alignItems: "center",
    width: "60%",
  },
  button:{
    width:"40%"
  }
});
