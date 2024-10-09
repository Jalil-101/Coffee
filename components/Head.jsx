import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Slider from "./Slider";
import { LinearGradient } from "expo-linear-gradient";

const Head = () => {
  return (
    
      <LinearGradient
        colors={["#131313", "#313131"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1 }}
      >
        {/* Your content here */}

        <View className="">
          <View className=" h-auto w-full  ">
            <View className="pt-4">
              <View className="p-4 flex-row justify-between">
                <View>
                  <Text className="text-gray-400 text-base">Location</Text>
                  <View className="flex-row gap-2">
                    <Text className="text-gray-100 text-lg">
                      Bilzen, Tanjungbalai
                    </Text>
                    <MaterialIcons
                      name="keyboard-arrow-down"
                      size={24}
                      color="white"
                    />
                  </View>
                </View>
                <View>
                  <Image
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/2cc8/f732/010ebc8f3f3a6983708fd3b00a4efef8?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gchk6~wZ8j83vq3fnvvykfpCBrNSwA3bZPiw-rPhNyo~1j2WgtdRBvhy4tVghnicCQ9lznDMH0Vo5F4wLn3JIb3Ko8iLpkeZk2eM-2wyFougub0AdF5zQ0v4oDuRPWyVQSQCdHerk~z217v8BxX6gH3ZDdtGziDgE-1Hzr2m1id1URF0xw-DPc3D9IbJcOHoB6zbCdOpmbHMC99yuF-FcEAg-G55PSU8aT7OGAi4s2Xv~yCXbsIb4xxNFQA-6pK6D1CJWrmKizl0RPfTCuk48HCPLyhxBnPVTESPvVlSIffFfodMLvMPA8jXm9WPHXjqOZJQHYij9MJuLQVvfhmKYA__",
                    }}
                    height={50}
                    width={50}
                    borderRadius={16}
                  />
                </View>
              </View>
            </View>

            {/* Search Box  */}

            <View className=" mt-6">
              <View>
                <TextInput
                  className="border-2 py-3 mx-4  px-12  border-gray-700  bg-gray-700 rounded-lg text-xl text-white"
                  value={Text}
                  placeholder="Search coffee"
                  placeholderTextColor="#C0C0C0"
                />

                <View className="absolute left-6 top-4">
                  <Feather name="search" size={26} color="#DCD9D9" />
                </View>
              </View>
            </View>
            <View className=" ">
              <View className="abolute left-3/4 bottom-12 ml-6 border-2 w-12 h-11 justify-center items-center rounded-lg border-[#C67C4E] bg-[#C67C4E] ">
                <View>
                  <Ionicons name="options-outline" size={28} color="white" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    
  );
};

export default Head;
