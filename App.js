import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import { GoalItem } from "./components/GoalItem";
import { InputValue } from "./components/InputValue";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    if (!enteredGoal) {
      alert("fill the input");
      return;
    }
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.round().toString() + Date.now(), value: enteredGoal },
    ]);
    setIsModal(false);
  };

  const RemoveItem = (idx) => {
    const newItems = courseGoals.filter((item) => item.id !== idx);

    setCourseGoals(newItems);
  };

  const cancelAddGoalHandler = () => {
    setIsModal(false);
  };  

  return (
    <View>
      <View style={styles.screen}>
        <Button title="Show Modal" onPress={() => setIsModal(true)} />
        <InputValue
          addGoalHandler={addGoalHandler}
          isModal={isModal}
          onCancel={cancelAddGoalHandler}
        />

        <FlatList
          data={courseGoals}
          renderItem={(dataItem) => (
            <GoalItem dataItem={dataItem} RemoveItem={RemoveItem} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40,
  },
});
