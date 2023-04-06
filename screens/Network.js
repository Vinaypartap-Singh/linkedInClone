import {Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import NetworkCard from "./components/NetworkCard";

const Network = () => {
  const networkData = [
    {
      data: "1",
    },
    {
      data: "2",
    },
    {
      data: "3",
    },
    {
      data: "4",
    },
    {
      data: "5",
    },
    {
      data: "6",
    },
    {
      data: "7",
    },
    {
      data: "8",
    },
    {
      data: "9",
    },
    {
      data: "10",
    },
    {
      data: "11",
    },
    {
      data: "12",
    },
    {
      data: "13",
    },
    {
      data: "14",
    },
    {
      data: "15",
    },
    {
      data: "16",
    },
  ];

  return (
    <View>
      <View style={{ padding: 10, backgroundColor: "white", margin: 5 }}>
        <Text style={{padding: 10, fontWeight: "bold", fontSize: 16}}>Manage My Network</Text>
      </View>

      <View style={{ padding: 10, backgroundColor: "white", margin: 5 }}>
        <Text style={{padding: 10, backgroundColor: "white", fontWeight: "500", fontSize: 16}}>Invitation have moved to notifications tab</Text>
        <TouchableOpacity style={{ padding: 10, backgroundColor: "blue", width: "50%", alignItems: "center", borderRadius: 100 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Go To Notifications</Text>
        </TouchableOpacity>
      </View>


      <View>
        <ScrollView
          contentContainerStyle={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: Dimensions.get("window").width,
            flexWrap: "wrap",
          }}
        >
          {networkData.map((data) => {
            return <NetworkCard data={data} key={data.data} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Network;

const styles = StyleSheet.create({});
