import { Text, View, StyleSheet, Pressable } from "react-native";
import React from "react";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#451c79" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onDeleteGoal.bind(null, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    borderRadius: 6,
    backgroundColor: "#451c79",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
