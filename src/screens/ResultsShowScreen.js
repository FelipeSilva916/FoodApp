import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const ResultsShowScreen = ({ result, navigation }) => {
  const id = navigation.getParam("id");
  console.log(id);
  return (
    <>
      <Text>Results Show Screen</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
