import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const GOALS_LIST = [
  // {
  //   id: 0,
  //   title: "Master react native",
  //   isComplete: false,
  // },
  // {
  //   id: 1,
  //   title: "Master DSA",
  //   isComplete: false,
  // },
];

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [goals, setGoals] = useState(GOALS_LIST);

  const addGoalHandler = () => {
    if (inputValue.trim().length !== 0) {
      console.log("goal added to the list", inputValue);
      setGoals([
        ...goals,
        { id: goals.length, title: inputValue, isComplete: false },
      ]);
      setInputValue("");
    }
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a goal"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      {/* we have to add scroll view to make content scrollable and wrap scrollView inside a view, only then the goals container will ocuppy the intended space. if you don't do it and add goalsContainer styles directly on ScrollView, the space that it occupies won't be correct. Basically outer view controls how much screen the content should take up and ScrollView makes the content scrollable */}
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {goals &&
            goals.map((goal) => {
              {
                /* wrapping text inside view here as ios native element which will be transpiled to from Text, won't support borderRadius.(It seems to support now - latest) */
              }
              return (
                <View key={goal.id} style={styles.goalItem}>
                  <Text style={styles.goalText}>{goal.title}</Text>
                </View>
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 25,
    flex: 1,
  },
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
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
