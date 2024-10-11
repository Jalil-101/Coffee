import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Tabs from "./components/Tabs";
import Onboarding from "./screens/Onboarding";
import { Header } from "react-native/Libraries/NewAppScreen";
import Order from "./screens/Order";
import Delivery from "./screens/Delivery";
import Detail from "./screens/Detail";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="order" component={Order} />
        <Stack.Screen name="delivery" component={Delivery} />
        <Stack.Screen name="detail" component={Detail} />

        <Stack.Screen name="tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
