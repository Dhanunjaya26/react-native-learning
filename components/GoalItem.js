import { StyleSheet, View, Text, Pressable } from "react-native";
import { Platform } from "react-native";

const GoalItem = ({ goalText, deleteGoalHandler, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => deleteGoalHandler(id)} //Alternatively,{deleteGoalHandler.bind(this, id)}. bind method sets up deleteGoalHandler for future execution with required arguments
        android_ripple={{ color: "#210644" }} //Applicable for android
        style={({ pressed }) =>
          pressed && Platform.OS == "ios" && styles.pressedItem
        }
      >
        <Text style={styles.goalText}>{goalText}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: "#210644",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
