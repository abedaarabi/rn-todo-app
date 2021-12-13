import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export const GoalItem = ({ dataItem, RemoveItem }) => {
  return (
    <TouchableOpacity
      onAccessibilityAction={0.5}
      onPress={() => RemoveItem(dataItem.item.id)}
    >
      <View style={styles.listItem}>
        <Text>{dataItem.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
