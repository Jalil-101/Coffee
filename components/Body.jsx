import { View, Text, Image } from "react-native";
import React from "react";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";

const Body = () => {
  return (
    <View className="p-4">
      <View className="border-2  w-40 h-60 rounded-lg border-white bg-white ">
        <View>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/6ef5/d3dd/f74a0912e6e3eef515b6450927558373?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MXQMIYJG3FF8J3ZsHr4nzRj3r8M1PhbP35ZtIxNg8AyJ9i3Xs~loK4-pOC5UPy0x0i12pLcnKD~VKlYzJisXYWEX27suTDwuu5H14estwTpw3NYfu9~q1okLOdBWxKg-WrPI-HCt9MDKjcs0hhQEQPlqgnGFMZMF7Oz5yViuQi2dfvAKCK2AN~szlJHQAzw4dnkgRkFdrhI3FkX09Bfi7Sn~dai-Yx8sz~t8Oov56DX0khSVK7KwQzrXOfnBhSNtODr1p57km6o-35PMoLByUf1qedc47PCY3oDKNWMzARjKKIuaRbwXpCHO03GGP5D2rJDVpu9TurpLoLJpYLqy~Q__",
            }}
            height={150}
            borderRadius={8}
          />
          <View className=" flex-row gap-1">
            <View className=" absolute bottom-44 left-1">
              <Octicons name="star-fill" size={14} color="orange" />
            </View>
            <View className="absolute bottom-44 left-6">
              <Text className="text-white ">4.8</Text>
            </View>
            <View className="pt-2">
              <Text className="text-lg font-medium">Cappuccino</Text>
              <Text className="text-gray-500">with Chocolate</Text>
              <View className="flex-row justify-center items-baseline space-x-4">
                <Text className="text-xl font-bold pt-2">$4.53</Text>
                <View className="border-2 w-8  h-8 rounded-lg border-[#C67C4E] bg-[#C67C4E] justify-center items-center">
                  <AntDesign name="plus" size={24} color="white" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Body;
