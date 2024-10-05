import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Head = () => {
  return (
    <SafeAreaView className="bg-gray-800 ">
      <View>
        <View className=" h-3/5 w-full  ">
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













        </View>
      </View>
    </SafeAreaView>
  );
};

export default Head;
