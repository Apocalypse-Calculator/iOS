import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { theme } from "../styles/theme";
import { useNavigation } from "@react-navigation/native";

export default PickRequestMoreItems = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity>
        <Text
          style={styles.requestItem}
          onPress={() => navigation.navigate("Request")}>
          I'd like to request an item to add here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: theme.colors.grey,
    marginTop: 24.6,
    fontSize: 14,
    height: 16,
  },

  requestItem: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 33,
    height: 15,
    color: theme.colors.linkAwayBlue,
  },
});
