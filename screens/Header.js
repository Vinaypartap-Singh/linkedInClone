import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ route }) => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => {}}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
          }}
          style={{ height: 40, width: 40, borderRadius: 100 }}
        />
      </TouchableOpacity>
      <TextInput
        placeholder="Search"
        style={{
          backgroundColor: "#f7f7f7",
          marginHorizontal: 20,
          borderRadius: 5,
          paddingLeft: 20,
          width: "70%",
          paddingVertical: Platform.OS === "android" ? 3 : 10,
        }}
      />
      <Ionicons name="chatbubble-ellipses-outline" size={28} color={"black"} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
