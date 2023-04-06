import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import Navigator from "./screens/Navigator";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./screens/Header";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <SafeAreaView>
        <Header />
      </SafeAreaView>
      <Navigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
