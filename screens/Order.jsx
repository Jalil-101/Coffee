import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Order = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <View>
          <View>
            <View className="p-4">
              <View className="flex-row space-x-24 items-center">
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("detail")}
                    className="border-2 w-12 h-12 rounded-full justify-center items-center border-white bg-white"
                  >
                    <SimpleLineIcons
                      name="arrow-left"
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
                <View className=" items-center justify-center">
                  <Text className="text-xl font-semibold">Order</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="p-4">
        <View className="border-6 w-54 h-14 border-gray-100 bg-slate-300 rounded-xl  justify-center flex-row ">
          <View className="pt-1">
            <TouchableOpacity>
              <View className="border-2 w-44 h-12 border-[#C67C4E] bg-[#C67C4E] rounded-xl mr-40 justify-center items-center">
                <Text className="text-xl text-white font-semibold ">
                  Deliver
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="justify-center items-center">
            <TouchableOpacity className="bg-[#C67C4E]">
              <Text className="text-xl absolute right-12 top-4 font-semibold ">
                Pick Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="pt-6">
          <Text className="text-xl font-semibold "> Delivery Address</Text>
          <Text className="text-lg font-semibold pt-4 "> JI. Kpg Sutoyo</Text>
          <Text className="text-base font-light text-gray-600 ">
            Kpg Sutoyo No. 620, Bilzen, Tanjungbalai.
          </Text>
          <View className="flex-row pt-2 gap-6">
            <TouchableOpacity className=" border-2 w-32 h-8 rounded-2xl border-gray-400 flex-row justify-center items-center space-x-2">
              <Feather name="edit" size={24} color="black" />
              <Text className="text-sm">Edit Address</Text>
            </TouchableOpacity>
            <TouchableOpacity className=" border-2 w-32 h-8 rounded-2xl border-gray-400 flex-row justify-center items-center space-x-2">
              <MaterialCommunityIcons
                name="notebook-plus-outline"
                size={24}
                color="black"
              />
              <Text className="text-sm">Add Notes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Order;
