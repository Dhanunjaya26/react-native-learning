import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = ({ inputValue, setInputValue, addGoalHandler }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter a goal"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
