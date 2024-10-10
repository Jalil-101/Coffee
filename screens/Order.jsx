import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Order = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            <View className="flex-row pt-4 gap-6">
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

          <View className="border-b-2  pt-6 border-gray-300"></View>
          <View className=" pt-4 flex-row items-center space-x-2">
            <Image
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/6ef5/d3dd/f74a0912e6e3eef515b6450927558373?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MXQMIYJG3FF8J3ZsHr4nzRj3r8M1PhbP35ZtIxNg8AyJ9i3Xs~loK4-pOC5UPy0x0i12pLcnKD~VKlYzJisXYWEX27suTDwuu5H14estwTpw3NYfu9~q1okLOdBWxKg-WrPI-HCt9MDKjcs0hhQEQPlqgnGFMZMF7Oz5yViuQi2dfvAKCK2AN~szlJHQAzw4dnkgRkFdrhI3FkX09Bfi7Sn~dai-Yx8sz~t8Oov56DX0khSVK7KwQzrXOfnBhSNtODr1p57km6o-35PMoLByUf1qedc47PCY3oDKNWMzARjKKIuaRbwXpCHO03GGP5D2rJDVpu9TurpLoLJpYLqy~Q__",
              }}
              height={60}
              width={60}
              borderRadius={15}
            />
            <View className="">
              <Text className="text-xl font-bold">Cappucino</Text>
              <Text className="text-base font-medium text-gray-400">
                with Chocolate
              </Text>
            </View>
            <View className="flex-row  justify-center  items-center space-x-4 pl-12 ">
              <TouchableOpacity>
                <AntDesign name="minuscircleo" size={24} color="black" />
              </TouchableOpacity>
              <Text className="text-2xl font-bold">1</Text>
              <TouchableOpacity>
                <AntDesign name="pluscircleo" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View className="border-b-2  pt-4 border-gray-300"></View>

          <View className="pt-6">
            <TouchableOpacity className=" border-2 h-14 w-66 rounded-xl  flex-row  justify-center items-center space-x-10 border-gray-300">
              <Fontisto name="shopping-sale" size={28} color="#C67C4E" />
              <Text className=" text-xl font-semibold">
                1 Discount is applied
              </Text>
              <SimpleLineIcons name="arrow-right" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View className="pt-4 gap-2">
            <Text className="text-lg font-semibold ">Payment Summary </Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-light ">Price </Text>
              <Text className="text-lg font-semibold ">$ 4.53 </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-light ">Delivery fee</Text>
              <Text className="text-lg font-light line-through  ml-36">
                $ 2.0
              </Text>
              <Text className="text-lg font-semibold mr-2 ">$ 1.0</Text>
            </View>
          </View>

          <View className="border-b-2  pt-4 border-gray-300"></View>
          <View className="pt-2">
            <View className="flex-row justify-between items-center">
              <Text className="text-lg font-light ">Total Payment</Text>
              <Text className="text-lg font-semibold ">$ 5.53 </Text>
            </View>
          </View>

          <View className="pt-2 items-center ">
            <View className="justify-center items-center">
              <View className="flex-row gap-4">
                <FontAwesome6 name="money-bills" size={28} color="#C67C4E" />
                <View className="border-4 w-28 h-8 bg-slate-200 rounded-2xl border-slate-200 justify-center ">
                  <TouchableOpacity>
                    <View className="  border-4 w-14 h-6 bg-[#C67C4E] rounded-2xl border-[#C67C4E] justify-center items-center ">
                      <Text className="text-base text-white font-semibold ">
                        Cash
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Text className="absolute bottom-1 right-6 text-base font-semibold">
                    $ 5.53
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="pl-28">
                  <MaterialCommunityIcons
                    name="dots-horizontal-circle"
                    size={30}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="pl-6">
            <View className="pt-4">
              <TouchableOpacity
                onPress={() => navigation.navigate("delivery")}
                className="border-2 w-72 h-16 rounded-xl bg-[#C67C4E] justify-center items-center border-[#C67C4E]"
              >
                <Text className="text-xl text-white font-bold ">Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Order;
