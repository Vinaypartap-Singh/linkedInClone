import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeCard from "./components/HomeCard";
import image from "../assets/Images/postImage.jpg";

const HomeScreen = () => {
  const sampleData = [
    {
      personName: "VinayPartap Singh",
      role: "Web Developer",
      postContent:
        "Vinay is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      postImage: "../assets/Images/postImage.jpg",
      timeAgo: 12,
      connection: false,
    },
    {
      personName: "Prabh Bawa",
      role: "Graphic Designer",
      postContent:
        "Prabh Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      postImage: null,
      timeAgo: 11,
      connection: true,
    },
    {
      personName: "Hakam Singh",
      role: "Video Editor",
      postContent:
        "Hakam Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      postImage: "../assets/Images/postImage.jpg",
      timeAgo: 14,
      connection: true,
    },
    {
      personName: "PrabhNoor Singh",
      role: "Web Developer",
      postContent:
        "PrabhNoor Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      postImage: "../assets/Images/postImage.jpg",
      timeAgo: 17,
      connection: false,
    },
    {
      personName: "Harbir Singh",
      role: "Fresher",
      postContent:
        "Harbir Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      postImage: null,
      timeAgo: 18,
      connection: false,
    },
    {
      personName: "Robinpreet Singh",
      role: "Android Developer",
      postContent:
        "Robin Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      postImage: "../assets/Images/postImage.jpg",
      timeAgo: 12,
      connection: true,
    },
    {
      personName: "Shinag Singh",
      role: "Data Analytics",
      postContent: null,
      postImage: "../assets/Images/postImage.jpg",
      timeAgo: 20,
      connection: true,
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {sampleData.map((data) => {
          return <HomeCard key={data.personName} data={data} />;
        })}
      </ScrollView>
      {/* <FlatList
        data={sampleData}
        showsVerticalScrollIndicator={false}
        renderItem={({ data }) => <HomeCard data={data} />}
      /> */}
      {/* {sampleData.map((data) => {
        return <HomeCard key={data.data} />;
      })} */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
