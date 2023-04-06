import {Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";

const Profile = () => {
  return (
    <View>
        <ScrollView>
            <View style={{width: Dimensions.get('window').width}}>
                <Image
                    source={{uri: "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"}}
                    style={{
                        width: "100%",
                        height: 120,
                    }}
                />
                <Image
                    source={{
                        uri: "https://images.unsplash.com/photo-1512850692650-c382e34f7fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TWFsZSUyME1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
                    }}
                    style={{ height: 100, width: 100, borderRadius: 100, marginTop: -45, marginHorizontal: 10 }}
                />

                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 10 }}>VinayPartap Singh</Text>
                    <Text style={{ fontWeight: "500", fontSize: 14, marginTop: 5 }}>Founder of oplakart.in | React JS and Native Developer | Html Css | Javascript | Tailwind CSS | Bootstrap 5 | Google Sites | Shopify Developer</Text>
                    <Text style={{ fontWeight: "500", fontSize: 14, marginTop: 5, color: "grey" }}>Difficult road lead to beauitful destinations </Text>
                    <View style={{marginTop: 10, flexDirection: "row"}}>
                        <View>
                            <Text style={{ fontWeight: "bold", fontSize: 16, color: "blue" }}>3256 Followers</Text>
                        </View>
                        <View>
                            <Text style={{ fontWeight: "bold", fontSize: 16, color: "blue", marginHorizontal: 10 }}>500+ connections</Text>
                        </View>
                    </View>

                    <View style={{marginTop: 10, flexDirection: "row", width: "100%", justifyContent: "space-evenly", alignItems: "center"}}>
                        <View>

                            <TouchableOpacity style={{ padding: 10, backgroundColor: "blue", width: 120, alignItems: "center", borderRadius: 100 }}>
                                <Text style={{ color: "white", fontWeight: "bold" }}>Open to</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={{ padding: 10, borderColor: "grey", borderWidth: 1, width: 140, alignItems: "center", borderRadius: 100 }}>
                                <Text style={{ color: "grey", fontWeight: "bold" }}>Add Section</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Ionicons name={"ellipsis-horizontal-circle"} color={"grey"} size={40} />
                        </View>
                    </View>


                    <View style={{ marginVertical: 10, backgroundColor: "white", paddingVertical: 10, paddingHorizontal: 10 }}>
                        <Text style={{fontWeight: "bold", fontSize: 20, }}> Analytics </Text>

                        <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: 10}}>
                            <View><Ionicons name={"eye"} size={15} color={"grey"} /></View>
                            <View>
                                <Text style={{ fontWeight: "bold", fontSize: 13, color: "grey", marginHorizontal: 10 }}>Private to you</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: 20}}>
                            <View><Ionicons name={"people"} size={30} color={"grey"} /></View>
                            <View>
                                <Text style={{ fontWeight: "bold", fontSize: 16, color: "black", marginHorizontal: 10 }}>1065 Profile Views</Text>
                                <Text style={{ fontWeight: "400", fontSize: 14, color: "grey", marginHorizontal: 10 }}>Discover who's viewed your profile</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: 20}}>
                            <View><Ionicons name={"bar-chart"} size={30} color={"grey"} /></View>
                            <View>
                                <Text style={{ fontWeight: "bold", fontSize: 16, color: "black", marginHorizontal: 10 }}>6589 Posty Impressions</Text>
                                <Text style={{ fontWeight: "400", fontSize: 14, color: "grey", marginHorizontal: 10 }}>Checkout who's engaging with your content</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: "row", marginTop: 20, justifyContent: "flex-start", alignItems: "center"}}>
                            <View><Ionicons name={"search"} size={30} color={"grey"} /></View>
                            <View>
                                <Text style={{ fontWeight: "bold", fontSize: 16, color: "black", marginHorizontal: 10 }}>471 search appearences</Text>
                                <Text style={{ fontWeight: "400", fontSize: 14, color: "grey", marginHorizontal: 10 }}>See how often you appear in search</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginVertical: 10, backgroundColor: "white", paddingVertical: 10, paddingHorizontal: 10 }}>
                        <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 10}}>
                            <View><Text style={{fontWeight: "bold", fontSize: 20, }}> About </Text></View>
                            <View><Ionicons name={"create-outline"} size={20} color={"grey"} /></View>
                        </View>


                        <Text style={{ fontSize: 15, marginTop: 10, lineHeight: 24 }}> I am VinayPartap Singh.Whether you're looking for a straightforward website or a sophisticated e-commerce platform, I have the knowledge and expertise required to realise your vision. Utilize my web development services to help you grow your company. Specialised in Shopify, Wordpress, Html, CSS, Javascript, React JS, React Native, and more.
                            I am the ideal choice for any web development project due to my proficiency in these technologies, together with my strong communication and problem-solving capabilities. I am committed to providing top-notch solutions and think it's critical to stay current.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
