import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const GOALS_LIST = [
  {
    id: 0,
    title: "Master react native",
    isComplete: false,
  },
  {
    id: 1,
    title: "Master DSA",
    isComplete: false,
  },
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
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={goals}
          renderItem={(itemData) => {
            // you don't have to give key prop to the elements in the list. FlatList takes care of it if you provide key property in each object of goals array.
            // FlatList calls renderItem({ item, index, separators }). So, the argument in callback function assigned to renderItem(itemData) is actually an object. So, inorder to extract title from the goal, you have to do itemData.item.title
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.title}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
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
