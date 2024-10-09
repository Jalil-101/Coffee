import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import Head from "../components/Head";
import Slider from "../components/Slider";
import Body from "../components/Body";
const Home = () => {
  return (
    <SafeAreaView className="bg-[#1F1F1F]">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-slate-100">
          <Head />
          <Slider />
          <Body />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
