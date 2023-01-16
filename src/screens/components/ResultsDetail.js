import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Text style={styles.name}>{result.name}</Text>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4
  },
  name: {
    fontWeight: "bold"
  }
});
export default ResultsDetail;
