import {StyleSheet, View, FlatList, Button} from "react-native";
import { useState } from "react";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [goalsData, setGoalsData] = useState([]);
  const [visModal, setVisModal] = useState(false);

  const AddGoalHandler = (inputData) => {
    if (inputData.length > 0) {
      setGoalsData((currGoal) => [
        ...currGoal,
        { data: inputData, id: Math.random().toString() },
      ]);
    } else {
      alert("Please enter goal");
    }
  };

  const delGoalsHandler = (id) => {
    setGoalsData((currGoal) => {
      return currGoal.filter((goal) => goal.id !== id);
    })
  };
  const visableModel = () => {
    setVisModal(true);
  }
  const cancleVisableModel = () => {
    setVisModal(false);
  }
  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#841584" onPress={visableModel}></Button>
      {visModal && (
        <View>
          <GoalInput onAddGoal={AddGoalHandler} showModal={visModal} cancelModel={cancleVisableModel} />
        {/* <View style={styles.goalContainer}> */}
        {/* <ScrollView>
        {goalsData.map((dataItem) => (
            <GoalItem dataa={dataItem}/>
            ))}
          </ScrollView> */}
        {/* Or Use FlatList without map*/}
          {/* </View> */}
          </View>
      )}
        <FlatList
          data={goalsData}
          renderItem={(dataItem) => {
            return (
              <GoalItem dataa={dataItem} delGoal={delGoalsHandler} />
              );
            }}
        keyExtractor={(item) => item.id}
        style={{marginTop:8}}
        />
          </View>
        </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalContainer: {
    flex: 5,
  },
});
