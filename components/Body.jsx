import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Body = () => {
  return (
    <View>
      <View className="p-4 flex-row gap-6">
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
              <View className=" absolute bottom-52 left-1">
                <Octicons name="star-fill" size={14} color="orange" />
              </View>
              <View className="absolute bottom-52 left-6">
                <Text className="text-white font-normal ">4.8</Text>
              </View>
              <View className="pt-2">
                <Text className="text-lg font-medium">Cappuccino</Text>
                <Text className="text-gray-500">with Chocolate</Text>
                <View className="flex-row justify-center items-baseline space-x-16">
                  <Text className="text-xl font-bold pt-2">$4.53</Text>
                  <TouchableOpacity>
                    <FontAwesome name="plus-square" size={38} color="#C67C4E" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="border-2  w-40 h-60 rounded-lg border-white bg-white ">
          <View>
            <Image
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/6535/e071/216a548b7dc8d778152c2b26d6e49590?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NJF8ncQpyolTYM8DCF9TWv3NddeYdTELcLZEBp1wcI7rRHXwYi1lRJ9vzI12NMCmjA7IY0Xak4delBTEz1XGCA1kHNkJaCsQUTlBn~IRyAvCj3aGEFWqd6RGCplstvlLu3-1yAajXAbrlfXgnf7dUFdls3xN8NnwYLE-QV6oyw-3vfygu592vs7VeN2aFdcXBQFkRIXjG16GnKqw5L-AjGwIu4YPYiQ3gWf6uSFKSyy1NtAl4id3gabzgJIogtQC14FK7FeLuGFLzhTM36~92HAo3I8w~UySsCv4gx99UxcqEhtfXKcPpAppxN12nzMLd0XvUW9fKBafxuqZFTAKdA__",
              }}
              height={150}
              borderRadius={8}
            />
            <View className=" flex-row gap-1">
              <View className=" absolute bottom-52 left-1">
                <Octicons name="star-fill" size={14} color="orange" />
              </View>
              <View className="absolute bottom-52 left-6">
                <Text className="text-white font-normal ">4.8</Text>
              </View>
              <View className="pt-2">
                <Text className="text-lg font-medium">Cappuccino</Text>
                <Text className="text-gray-500">with Oat milk</Text>
                <View className="flex-row justify-center items-baseline space-x-16">
                  <Text className="text-xl font-bold pt-2">$3.90</Text>
                  <TouchableOpacity>
                    <FontAwesome name="plus-square" size={38} color="#C67C4E" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className="p-4 flex-row gap-6">
        <View className="border-2  w-40 h-60 rounded-lg border-white bg-white ">
          <View>
            <Image
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/86ae/2671/d9a759837036d6bef5bbf19cd5d1ea37?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GCVyp0KJeE-BnX3yaOW~bnVYC7a8aJgOQv-K2GSxLEsk4cWofZRjNNxJzKjiwLcZySS8HfCyiMwhty~lPvyloc7KLkHQVABDvyhW5mwY79XrGEK8TgLEwei21l7-PmRjZYwgj7B8kbUAFn0dPEzCQTXqr8sevaiozzuSeu14IHXSLpnhAndtqi6zLVO2ghbs96xOAAF6s3ApU6GmSCHOwzE9p1KNe2nF-qTQIqI7bU2cpMu0~9uOn6wbZaT~mFAu~EL0DeYhuCRMMNd-c6mOxS0gCdJjbfI7zD2nEa8CoBH9M~mFjZSFeL4ER4xQIk~688rYZrY3g4xbot9~iKCaWA__",
              }}
              height={150}
              borderRadius={8}
            />
            <View className=" flex-row gap-1">
              <View className=" absolute bottom-52 left-1">
                <Octicons name="star-fill" size={14} color="orange" />
              </View>
              <View className="absolute bottom-52 left-6">
                <Text className="text-white font-normal ">4.8</Text>
              </View>
              <View className="pt-2">
                <Text className="text-lg font-medium">Cappuccino</Text>
                <Text className="text-gray-500">with Steamed milk</Text>
                <View className="flex-row justify-center items-baseline space-x-16">
                  <Text className="text-xl font-bold pt-2">$4.53</Text>
                  <TouchableOpacity>
                    <FontAwesome name="plus-square" size={38} color="#C67C4E" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className="border-2  w-40 h-60 rounded-lg border-white bg-white ">
          <View>
            <Image
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/4068/5f87/3d2871fbe0b134996f0ca84e01615f1e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZnwoaLQj7reojwji3ffFm-qKp36-svnlCWeMcPAfS0SuyIC3dml13iPqdP8KInGG6ZV7LDOsM7XN4Gb4YjzYx8eFo3FBqWZvyZLb~H1VBpi~ZqZsCJOyjNwyuzJV0h3ZVwK24XSuENaVv9jk-shYWA1MngoAowuUSI48f45~dRRLzjNBm~RvZ4IQ4hG9hygvxcWUej21udScPec5oMsc2khLWNF0CTrHmWbST1vyKAaSHJwY4BmQoLeZ6s4u-sxLL2qIAVm5pjUigt5mZVnnc986o7VQME8UrAOt9DkTEKUKCRPAZBpYf-fVA-C7fvc~7jUmz~N7qLCSTBgEGPWjDg__",
              }}
              height={150}
              borderRadius={8}
            />
            <View className=" flex-row gap-1">
              <View className=" absolute bottom-52 left-1">
                <Octicons name="star-fill" size={14} color="orange" />
              </View>
              <View className="absolute bottom-52 left-6">
                <Text className="text-white font-normal ">4.8</Text>
              </View>
              <View className="pt-2">
                <Text className="text-lg font-medium">Cappuccino</Text>
                <Text className="text-gray-500">with Soy milk</Text>
                <View className="flex-row justify-center items-baseline space-x-16">
                  <Text className="text-xl font-bold pt-2">$3.90</Text>
                  <TouchableOpacity>
                    <FontAwesome name="plus-square" size={38} color="#C67C4E" />
                  </TouchableOpacity>
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
