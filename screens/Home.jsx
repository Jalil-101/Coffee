import {
  View,
  Text,
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

      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View>
          <Head />
        
        
              <Slider />
              <Body/>
        </View>
      </TouchableWithoutFeedback>
    
  );
};

export default Home;
