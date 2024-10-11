import { View, Text, SafeAreaView,ScrollView, Image ,TouchableOpacity,} from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';


import Octicons from "@expo/vector-icons/Octicons";

import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Detail = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View>
            <View>
              <View className="p-4">
                <View className="flex-row  justify-between items-center">
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("home")}
                      className="border-2 w-12 h-12 rounded-full justify-center items-center border-white bg-white"
                    >
                      <SimpleLineIcons
                        name="arrow-left"
                        size={24}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text className="text-xl font-semibold">Detail</Text>
                  </View>
                  <View>
                    <AntDesign name="hearto" size={24} color="black" />
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* <Title /> */}
          {/* <About /> */}
          <View>
            <View className="p-4">
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/6ef5/d3dd/f74a0912e6e3eef515b6450927558373?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MXQMIYJG3FF8J3ZsHr4nzRj3r8M1PhbP35ZtIxNg8AyJ9i3Xs~loK4-pOC5UPy0x0i12pLcnKD~VKlYzJisXYWEX27suTDwuu5H14estwTpw3NYfu9~q1okLOdBWxKg-WrPI-HCt9MDKjcs0hhQEQPlqgnGFMZMF7Oz5yViuQi2dfvAKCK2AN~szlJHQAzw4dnkgRkFdrhI3FkX09Bfi7Sn~dai-Yx8sz~t8Oov56DX0khSVK7KwQzrXOfnBhSNtODr1p57km6o-35PMoLByUf1qedc47PCY3oDKNWMzARjKKIuaRbwXpCHO03GGP5D2rJDVpu9TurpLoLJpYLqy~Q__",
                }}
                height={250}
                borderRadius={20}
              />
              <Text className="text-xl font-semibold pt-2"> Cappucino</Text>
              <Text className="text-base text-gray-500"> with Chocolate</Text>
              <View className="flex-row gap-2 pt-2 items-center p-2">
                <View className=" ">
                  <Octicons name="star-fill" size={24} color="orange" />
                </View>
                <View className=" flex-row">
                  <Text className="text-black text-lg ">4.8 </Text>
                  <Text className="text-gray-400 text-sm pt-1">(230) </Text>
                </View>
                <View className="pl-28">
                  <View className="flex-row space-x-4 ">
                    <TouchableOpacity>
                      <View className="border-2 w-12 h-12 justify-center items-center rounded-full border-white bg-white">
                        <FontAwesome5
                          name="cookie-bite"
                          size={24}
                          color="#C67C4E"
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <View className="border-2 w-12 h-12 justify-center items-center rounded-full border-white bg-white">
                        <FontAwesome6
                          name="jug-detergent"
                          size={24}
                          color="#C67C4E"
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View className="border-b-2 pt-2 border-gray-300"></View>
              <Text className="text-xl font-semibold pt-2">Description</Text>
              <Text className="text-sm ">
                A cappuccino is an approximately 150 ml (5 oz) beverage, with 25
                ml of espresso coffee and 85ml of fresh milk the fo..
              </Text>

              <Text className="text-base text-[#C67C4E]">Read more</Text>

              <Text className="text-xl  font-semibold pt-4">Sizes</Text>

              <View className="flex-row gap-8 pt-2">
                <View className="border-2 border-gray-400 h-10  w-1/4 rounded-lg justify-center items-center">
                  <Text className="text-xl ">S</Text>
                </View>

                <View className="border-2 border-red-400 bg-red-200 h-10  w-1/4 rounded-lg justify-center items-center">
                  <Text className="text-xl text-red-400 ">M</Text>
                </View>
                <View className="border-2 border-gray-400 h-10  w-1/4 rounded-lg justify-center items-center">
                  <Text className="text-xl ">L</Text>
                </View>
              </View>
              <View className="justify-center">
                <View className="flex-row gap-12">
                  <View className="pt-6">
                    <Text className="text-lg text-gray-400"> Prices</Text>
                    <Text className="text-xl text-[#C67C4E] font-bold">
                      $4.53
                    </Text>
                  </View>
                  <View className="pt-4">
                    <TouchableOpacity
                      onPress={() => navigation.navigate("order")}
                      className="border-2 w-60 h-16 rounded-xl border-[#C67C4E] bg-[#C67C4E] justify-center items-center"
                    >
                      <Text className="text-xl text-white  font-semibold">
                        Buy Now
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
