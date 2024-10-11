import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Detail from "../screens/Detail";
import Order from "../screens/Order";
import Delivery from "../screens/Delivery";
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Foundation } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Octicons from "@expo/vector-icons/Octicons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#efb810",
          tabBarInactiveTintColor: "green",
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
            //this increases the height of the
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Foundation name="home" size={24} color="#C67C4E" />
            ),
          }}
        />
        <Tab.Screen
          name="detail"
          component={Detail}
          options={{
            tabBarIconStyle: { color: "#FF6464" },
            tabBarStyle: { display: "none" },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart-half-outline" size={24} color="gray" />
            ),
            //   tabBarStyle: { display: "none" },
          }}
        />
        <Tab.Screen
          name="order"
          component={Order}
          options={{
            tabBarStyle: { display: "none" },
            tabBarIcon: ({ color, size }) => (
              <FontAwesome6 name="bag-shopping" size={24} color="gray" />
            ),
            //   tabBarStyle: { display: "none" },
          }}
        />
        <Tab.Screen
          name="delivery"
          component={Delivery}
          options={{
            tabBarStyle: { display: "none"},
            tabBarIcon: ({ color, size }) => (
              <Octicons name="bell-fill" size={24} color="gray" />
            ),
            //   tabBarStyle: { display: "none" },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
