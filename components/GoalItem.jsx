import React from "react";
import {StyleSheet, Text, View, Pressable} from "react-native";

export const GoalItem = ({dataa,delGoal}) => {
  const delItem = () => {
    delGoal(dataa.item.id);
  };
  return (
    <View key={dataa.id} style={styles.goalItem}>
      <Pressable onPress={delItem} android_ripple={{color:"#F8D7DA"}} style={(prss)=> prss.pressed && styles.pressedItem}>
      <Text style={{ color: "#fff", padding: 8}}>{dataa.item.data}</Text>
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: "#841584",
      color: "#fff",
  },
    pressedItem: {
    opacity:0.5,
  },
  });
  