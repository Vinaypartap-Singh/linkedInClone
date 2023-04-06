import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const NetworkCard = ({ navigation }) => {
  return (
    <View
      style={{
        width: "40%",
        borderWidth: 1,
        borderColor: "grey",
        height: 240,
        borderRadius: 10,
        margin: 10,
      }}
    >
      <Image
        source={require("../../assets/Images/bg.jpg")}
        style={{
          width: "100%",
          height: 65,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <Image
          source={require("../../assets/Images/model.jpg")}
          style={{
            width: "70%",
            height: 120,
            borderRadius: 100,
            marginTop: -40,
          }}
        />
      </View>

      <View
        style={{
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 10 }}>
          Olivia
        </Text>

        <Text style={{ fontWeight: "500", fontSize: 13, color: "grey" }}>
          Shopify Developer
        </Text>

        <Text
          style={{
            fontWeight: "500",
            fontSize: 13,
            color: "grey",
            marginTop: 5,
          }}
        >
          57 mutual connections
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "blue",
              alignItems: "center",
            }}
          >
            Connect
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NetworkCard;

const styles = StyleSheet.create({});
