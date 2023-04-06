import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";

const Notification = () => {
    const notificationData = [
        {
            logo: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "Your job alert for the role of Full Stack Developer in Bangalore.",
            notificationTime: 1,
            isNewJob: true,
            // isAView: false,
            // isJobAlert: false,
            // isBirthday: false,
            // isTrending: false,
            // trendingCount: 1535,
            // isConnectionAccepted: false
        },
        {
            logo: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "Aman Kumar Accepted your connection request.",
            notificationTime: 1,
            isConnectionAccepted: true
        },
        {
            logo: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "A post by an employye at M.S. Enterprises is popular. Employee bonus by the company.",
            notificationTime: 1,
            isTrending: true,
            trendingCount: 10586,
        },
        {
            logo: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "New from the Frontend Devs group. A new blog has been publised in the group. Click to view it.",
            notificationTime: 2,
        },
        {
            logo: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "Your job alert for Backend Developer role in Mumbai.",
            notificationTime: 2,
            isJobAlert: true,
        },
        {
            logo: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "It's Joe and Ashish's birthday. Wish them",
            notificationTime: 4,
            isBirthday: true,
        },
        {
            logo: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "15 people viewed your profile today.",
            notificationTime: 4,
            isAView: true,
        },
        {
            logo: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "You have a new job suggestion in the Frontend Devs group. Click to view it.",
            notificationTime: 4,
            isNewJob: true,
        },
        {
            logo: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "A new post at Geeks for Geeks is trending regarding the current market trends in Software Development.",
            notificationTime: 5,
            isTrending: true,
            trendingCount: 78424,
        },
        {
            logo: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "You have a new job alert for your preferences.",
            notificationTime: 7,
            isNewJob: true,
        },
        {
            logo: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "A new blog has been publised in your community regarding developments in blockchain technology.",
            notificationTime: 7,
        },
        {
            logo: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "Kashish was live. How an engineer spends his day in India 😁 ",
            notificationTime: 7,
        },
    ]
  return (
    <View style={{  width: "100%" }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{height: "100%"}} >
            {notificationData.map((data)=> {
                return <View key={data.description} style={{padding: 10, backgroundColor: "white", width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems:"center"}}>
                    <View style={{width: "20%"}}>
                        <Image
                            source={{
                                uri: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                            }}
                            style={{ height: 60, width: 60, borderRadius: 100 }}
                        />
                    </View>

                    <View style={{width: "70%"}}>
                        <Text>{data.description}.</Text>
                        {data.isNewJob ? <TouchableOpacity style={{paddingVertical: 5, marginVertical: 5, borderWidth: 1, width: 100, alignItems: "center", borderRadius: 100, borderColor: "blue"}}>
                            <Text style={{color: "blue"}}>View Job</Text>
                        </TouchableOpacity> : data.isJobAlert ? <TouchableOpacity style={{paddingVertical: 5, marginVertical: 5, borderWidth: 1, width: 100, alignItems: "center", borderRadius: 100, borderColor: "blue"}}>
                            <Text style={{color: "blue"}}>See 30+ Job</Text>
                        </TouchableOpacity> : data.isBirthday ? <TouchableOpacity style={{paddingVertical: 5, marginVertical: 5, borderWidth: 1, width: 140, alignItems: "center", borderRadius: 100, borderColor: "blue"}}>
                            <Text style={{color: "blue"}}>Happy Birthday</Text>
                        </TouchableOpacity>: data.isAView ? <TouchableOpacity style={{paddingVertical: 5, marginVertical: 5, borderWidth: 1, width: 130, alignItems: "center", borderRadius: 100, borderColor: "blue"}}>
                            <Text style={{color: "blue"}}>See All Views</Text>
                        </TouchableOpacity>: data.isConnectionAccepted ? <TouchableOpacity style={{paddingVertical: 5, marginVertical: 5, borderWidth: 1, width: 110, alignItems: "center", borderRadius: 100, borderColor: "blue"}}>
                            <Text style={{color: "blue"}}>Message</Text>
                        </TouchableOpacity>: data.isTrending ?
                            <Text style={{color: "grey", marginVertical: 3}}>{data.trendingCount} reactions</Text>: null }
                    </View>
                    <View style={{width: "20%"}}>
                        <View><Text style={{marginBottom: 6}}>{data.notificationTime} d</Text></View>
                        <Ionicons name={ "ellipsis-vertical" } size={20} />
                    </View>
                </View>
            })}

        </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
