import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Profile from "./Profile";
import Network from "./Network";
import Post from "./Post";
import Notification from "./Notification";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import Jobs from "./Jobs";

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === "Network") {
            iconName = focused ? "people" : "people-outline";
          } else if (rn === "Post") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (rn === "Notifications") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (rn === "Jobs") {
            iconName = focused ? "briefcase" : "briefcase-outline";
          } else if (rn === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Network"
        component={Network}
        options={{ tabBarBadge: 209, headerShown: false }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notification}
        options={{ tabBarBadge: 5, headerShown: false }}
      />
      <Tab.Screen
        name="Jobs"
        component={Jobs}
        options={{ tabBarBadge: 2, headerShown: false }}
      />
      <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ tabBarBadge: 0, headerShown: false }}
      />
    </Tab.Navigator>
  );
}
