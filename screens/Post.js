import {Alert, Dimensions, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";

const Post = () => {

    const postData = [
        {
            name: "Add a photo",
            icon: "camera"
        }, {
            name: "Take a video",
            icon: "videocam"
        }, {
            name: "Celebrate an occasion",
            icon: "sunny"
        }, {
            name: "Add a document",
            icon: "newspaper"
        }, {
            name: "Share that you're hiring",
            icon: "briefcase"
        }, {
            name: "Create a poll",
            icon: "bar-chart"
        }, {
            name: "Create an Event",
            icon: "calendar"
        }
    ]

    return (
        <View style={{padding: 10, position: "relative", height: "100%", alignItems: 'center'}}>
            <Image
                source={{
                    uri: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                }}
                style={{height: 80, width: 80, borderRadius: 100}}
            />


            <View style={{paddingVertical: 10}}>
                <TextInput
                    placeholder="What do you want to talk about ?"
                    style={{
                        backgroundColor: "#f7f7f7",
                        borderRadius: 5,
                        paddingLeft: 20,
                        width: 400,
                        paddingVertical: Platform.OS === "android" ? 3 : 10,
                    }}
                />
            </View>


            <View style={{
                position: "absolute",
                bottom: 10,
                borderWidth: 2,
                width: "100%",
                borderColor: "lightgrey",
                borderRadius: 10,
                padding: 20
                }}>
                {postData.map(({ name, icon })=> {
                    return <TouchableOpacity key={name} onPress={()=> Alert.alert("This is user interface based application")} style={{display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 15}}>
                        <View><Ionicons name={icon} size={25}/></View>
                        <View><Text style={{marginHorizontal: 10}}>{name}</Text></View></TouchableOpacity>
                })}

            </View>
        </View>
    );
};

export default Post;

const styles = StyleSheet.create({});
