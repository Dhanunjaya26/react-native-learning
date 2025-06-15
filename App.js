import { StatusBar } from "expo-status-bar"; //allows you to customize the mobile's status bar which shows notifications and battery and network details
import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const GOALS_LIST = [
  {
    id: 0,
    title: "Master react native",
    isComplete: false,
  },
  {
    id: 1,
    title: "Master DSAA",
    isComplete: false,
  },
];

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [goals, setGoals] = useState(GOALS_LIST);
  const [showInputModal, setShowInputModal] = useState(false);

  const addGoalHandler = () => {
    if (inputValue.trim().length !== 0) {
      console.log("goal added to the list", inputValue);
      setGoals([
        ...goals,
        { id: goals.length, title: inputValue, isComplete: false },
      ]);
      setInputValue("");
    }
    setShowInputModal(false);
  };

  const deleteGoalHandler = (id) => {
    console.log("deleting goal: ", id);
    const newGoals = goals.filter((goal) => goal.id !== id);
    setGoals(newGoals);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add your Goal"
          color="#a065ec"
          onPress={() => setShowInputModal(true)}
        />

        <GoalInput
          showModal={showInputModal}
          inputValue={inputValue}
          addGoalHandler={addGoalHandler}
          closeModal={() => setShowInputModal(false)}
          setInputValue={setInputValue}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={goals}
            renderItem={(itemData) => {
              // you don't have to give key prop to the elements in the list. FlatList takes care of it if you provide key property in each object of goals array.
              // FlatList calls renderItem({ item, index, separators }). So, the argument in callback function assigned to renderItem(itemData) is actually an object. So, inorder to extract title from the goal, you have to do itemData.item.title
              return (
                <GoalItem
                  goalText={itemData.item.title}
                  deleteGoalHandler={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              // If you don't provide name as key in the item property, then we should extract it in the name of key
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 25,
    flex: 1,
    // backgroundColor: "#1e0858", This style is added globally in app.json so that expo applies it for each page even if there are multiple screens after implementing navigation
  },
  goalsContainer: {
    flex: 5,
  },
});
