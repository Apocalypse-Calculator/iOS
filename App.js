import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import WelcomeBackground from "./Components/WelcomeBackground";
import WelcomeHeader from "./Components/WelcomeHeader";
import WelcomeSignIn from "./Components/WelcomeSignIn";

export default App = () => {
  return (
    <View style={styles.container}>
      <WelcomeBackground />
      <View style={{ alignItems: "center" }}>
        <WelcomeHeader />
        <WelcomeSignIn />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default (props) => {
  let [fontsLoaded] = useFonts({
    "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
    // "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return;
    //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //       <Text style={{ fontFamily: 'Inter-Black', fontSize: 40 }}>
    //         Inter Black
    //       </Text>
    //       <Text style={{ fontSize: 40 }}>Platform Default</Text>
    //     </View>
    //   );
    // }
  }
};
