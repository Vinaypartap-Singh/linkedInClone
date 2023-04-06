import {StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";

const Jobs = () => {
    const jobsData = [
        {
            logo: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhY3QlMjBuYXRpdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            title: 'Software Engineer Program',
            companyName: 'Wikimedia Foundation',
            location: 'New Delhi, India',
            daysAgo: 5,
            hasSchoolAlumni: true,
            alumniCount: 4,
        },
        {
            logo: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhY3QlMjBuYXRpdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            title: 'Full Stack Developer JavaScript',
            companyName: 'N.I. Associates',
            location: 'Mumbai, Maharashtra',
            daysAgo: 1,
            hasSchoolAlumni: false
        },
        {
            logo: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhY3QlMjBuYXRpdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            title: 'Intern/Junior Frontend Developer',
            companyName: "Byju's",
            location: 'India (Remote)',
            daysAgo: 10,
            hasSchoolAlumni: true,
            alumniCount: 1,
        },
        {
            logo: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhY3QlMjBuYXRpdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            title: 'Technical Writer - C++',
            companyName: 'Geeks for Geeks',
            location: 'Bangalore, Karnataka',
            daysAgo: 7,
            hasSchoolAlumni: true,
            alumniCount: 2,
        },
        {
            logo: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhY3QlMjBuYXRpdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
            title: 'Senior Software Developer',
            companyName: 'M.S. Software Solutions',
            location: 'New Delhi, India',
            daysAgo: 6,
            hasSchoolAlumni: false,
            alumniCount: 5,
        },
    ]
  return (
    <View style={{ padding: 10, height: "100%" }}>
      <Text style={{backgroundColor: "white", paddingVertical: 13, paddingHorizontal: 10, fontWeight: "bold"}}>Recommended for you</Text>
        <View style={{height: "100%"}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "white", paddingBottom: 30}}>
                {jobsData.map((data)=> {
                    return <View key={data.companyName} style={{padding: 10, backgroundColor: "white", width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems:"center", marginVertical: 20}}>
                        <View style={{width: "20%"}}>
                            <Image
                                source={{
                                    uri: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhY3QlMjBuYXRpdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                                }}
                                style={{ height: 60, width: 60 }}
                            />
                        </View>

                        <View style={{width: "70%", alignItems: "start"}}>
                            <Text style={{fontWeight: "bold", fontSize: 15}}>{data.title}</Text>
                            <Text style={{fontWeight: "500", fontSize: 12, marginTop: 5, color: "grey"}}>{data.companyName}</Text>
                            <Text style={{fontWeight: "500", fontSize: 12, marginTop: 5, color: "grey"}}>{data.location}</Text>
                            {data.hasSchoolAlumni ? <View style={{flexDirection: "row", alignItems: "center"}}><Ionicons name={"star" } size={18} /><Text style={{fontWeight: "500", fontSize: 12, marginTop: 5, color: "grey", marginLeft: 5}}>{data.alumniCount} school alumni</Text></View> : null }
                            <Text style={{fontWeight: "500", fontSize: 12, marginTop: 5, color: "grey"}}>{data.daysAgo} day ago</Text>
                        </View>

                        <View style={{width: "20%"}}>
                            <Ionicons name={ "bookmark-outline" } size={20} />
                        </View>
                    </View>
                })}

                <TouchableOpacity style={{ alignItems: "center", alignContent: "center", justifyContent: "center", paddingBottom: 70 }}>
                    <Text style={{fontWeight: "bold", color: "blue"}} > Show All </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    </View>
  );
};

export default Jobs;

const styles = StyleSheet.create({});
