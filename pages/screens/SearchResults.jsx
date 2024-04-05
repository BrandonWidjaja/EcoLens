import React from "react";
import { View, ScrollView } from "react-native";
import { Text, Header } from "@rneui/themed";
import { styles, theme } from "../../styles";

const SearchResults = ({ navigation, route }) => {
  const { message } = route.params;

  function handleGoHome() {
    navigation.navigate("Home");
  }

  return (
    <>
      <Header
        backgroundColor={theme.color.light}
        leftComponent={{
          icon: "close",
          color: theme.color.dark,
          onPress: handleGoHome,
        }}
      />
      <ScrollView style={styles.background}>
        <View style={styles.resultBox}>
          <Text style={styles.smallText}>{message}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default SearchResults;
