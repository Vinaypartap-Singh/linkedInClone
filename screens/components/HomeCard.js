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

const HomeCard = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        paddingVertical: 10,
        marginVertical: 5,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          paddingVertical: 10,
          marginVertical: 5,
          paddingHorizontal: 8,
          marginHorizontal: 5,
          position: "relative",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            }}
            style={{ height: 60, width: 60, borderRadius: 100 }}
          />

          <View
            style={{
              flexDirection: "column",
              alignContent: "center",
              paddingHorizontal: 10,
              textAlign: "start",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {data.personName}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "400", color: "grey" }}>
              {data.role}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "400", color: "grey" }}>
              {data.timeAgo} hr
            </Text>
          </View>

          <View
            style={{
              alignContent: "center",
              justifyContent: "flex-end",
              position: "absolute",
              right: 10,
            }}
          >
            {data.connection === false ? (
              <Text style={{ fontSize: 12, fontWeight: "700", color: "blue" }}>
                Follow
              </Text>
            ) : (
              ""
            )}
          </View>
        </View>
      </View>

      <View>
        {data.postContent === null ? (
          ""
        ) : (
          <Text
            style={{
              fontSize: 12,
              fontWeight: "700",
              color: "black",
              marginHorizontal: 10,
            }}
          >
            {data.postContent}
          </Text>
        )}
      </View>
      <View>
        {data.postImage === null ? (
          ""
        ) : (
          <Image
            source={require("../../assets/Images/postImage.jpg")}
            style={{
              height: 300,
              width: Dimensions.get("window").width,
              marginVertical: 10,
            }}
          />
        )}
      </View>

      <View
        style={{
          backgroundColor: "white",
          paddingVertical: 10,
          paddingHorizontal: 8,
          marginHorizontal: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignContent: "center" }}>
          <Image
            source={require("../../assets/Images/Like.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text> 12.4k Likes </Text>
        </View>

        <View style={{ flexDirection: "row", alignContent: "center" }}>
          <Text> 12.4k comments </Text>
          <Ionicons name="stop-circle-outline" size={16} color={"grey"} />
          <Text> 11k shares </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",
          paddingVertical: 10,
          marginTop: 5,
          borderTopWidth: 1,
          borderColor: "lightgrey",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-around",
            width: Dimensions.get("window").width,
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity>
              <Ionicons name="thumbs-up" size={22} color={"grey"} />
            </TouchableOpacity>
            <Text style={{ fontSize: 10 }}> Like </Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity>
              <Ionicons name="chatbubble-ellipses" size={22} color={"grey"} />
            </TouchableOpacity>
            <Text style={{ fontSize: 10 }}> Comment </Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity>
              <Ionicons name="share" size={22} color={"grey"} />
            </TouchableOpacity>
            <Text style={{ fontSize: 10 }}> Share </Text>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity>
              <Ionicons name="send" size={22} color={"grey"} />
            </TouchableOpacity>
            <Text style={{ fontSize: 10 }}> Send </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({});
