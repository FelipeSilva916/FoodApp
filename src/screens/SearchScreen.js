import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "./components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>We have found {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultsList title="Cost Effective" term={term} />
      <ResultsList title="Bit Pricier" term={term} />
      <ResultsList title="Big Spender" term={term} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
