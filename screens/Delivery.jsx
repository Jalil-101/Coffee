import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React from "react";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import PinchZoomView from "react-native-pinch-zoom-view";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Delivery = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View className=" ">
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/283a/ab35/bdf8034cf30d137c478ce73bd08713fd?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U2R~r8cV0t2Lrsnc2jdb0Ingup5tedEz5uZI70AxCMH0ScryV29ZSakuvgjmKDXTpMIGe4oCCiHbkInQ7ZOD2YxV9lT~hb2aaj8crGwZklzJHwZYc4cpcvKnzrb6HTDWJkuCP09GlwtXO7zMhtrRfrNX5eYjDOWOJ~IBqT33f9y1YFwCNP3~5Jq2STib9G8VwVZF9JFqQxMGa0iwfF0B6czzEBQgKBz9CPtsFoKH~xRltgGlpzfv8Lk8Ha5OQ4xA3E3nBI0X7Z6aLRsB5i6zLAqfiIkKnjlz~hAkIuPiKTYzKQDQpzG~QbEcvvWC~XuwofE1qYixQUPzu4CR3frKDQ__",
            }}
            height={500}
            width={1000}
          />
        </View>
        <View className="pt-4 absolute z-10">
          <View className="p-4 ">
            <View className="flex-row  space-x-60">
              <View className="">
                <TouchableOpacity
                  onPress={() => navigation.navigate("order")}
                  className="border-2 w-12 h-12 rounded-lg justify-center items-center border-white bg-white  "
                >
                  <SimpleLineIcons name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
              </View>
              {/* <View className=" items-center justify-center">
              <Text className="text-xl font-semibold">Order</Text>
            </View> */}
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("onboarding")}
                  className="border-2 w-12 h-12 rounded-lg justify-center items-center border-white bg-white"
                >
                  <FontAwesome6
                    name="location-crosshairs"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View className="pt-80 absolute ">
          <View className="bg-white border-white border-4 h-screen w-screen ">
            <View className="  items-center">
              <View className="bg-gray-100 border-gray  h-2 w-14 rounded-md"></View>

              <Text className="pt-4 text-xl font-bold">10 minutes left</Text>
              <View className="flex-row justify-center items-center space-x-1">
                <Text className="pt-2 text-lg font-semibold text-gray-400">
                  Delivery to
                </Text>
                <Text className="pt-2 text-lg font-semibold">
                  JI. Kpg Sutoyo
                </Text>
              </View>
            </View>

            <View className="items-center">
              <View className="pt-4 flex-row gap-4  ">
                <View className="bg-green-500 border-2 border-green-500 h-2 w-16 rounded-md "></View>
                <View className="bg-green-500 border-2 border-green-500 h-2 w-16 rounded-md "></View>
                <View className="bg-green-500 border-2 border-green-500 h-2 w-16 rounded-md "></View>
                <View className="bg-gray-300 border-2 border-gray-300 h-2 w-16 rounded-md "></View>
              </View>
            </View>

            <View className="items-center pt-4">
              <View className="border-2 h-28  w-80 border-gray-200 rounded-xl justify-center ">
                <View className="justify-center  flex-row items-center gap-2">
                  <View className="border-2 h-24 w-28 border-gray-200 rounded-xl  justify-center items-center">
                    <MaterialIcons
                      name="delivery-dining"
                      size={64}
                      color="#C67C4E"
                    />
                  </View>
                  <View>
                    <Text className="text-lg font-bold">
                      Delivered your order
                    </Text>
                    <Text className="text-base font-light pt-4 text-gray-600">
                      We deliver your goods to you
                    </Text>
                    <Text className="text-base font-light text-gray-600">
                      in the shortes possible time.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="items-center justify-center ">
              <View className="item-center pt-8 flex-row space-x-24  justify-start">
                <View className="flex-row gap-4 justify-center">
                  <Image
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/10a2/2f73/63fa24249a2d5cfc576fd05ebbcffa09?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QwakYLdEXMNI3lx8lmPkRH9K6NSipjQZ667WO1YZTCjsivx~mT1cBDmHclzIKZfCcJ7bp9ofTCFsTvIPofg5Jq9EWWl3nXz7f6hn0vZgGIb6CdIH0OspkET9221Vam2hm5CosWOvZuVYTzryRSESIggyTQsH0Vn5fPkWndy0OvEmtRayMuc09HtV-TdQmrbtB~y7upU-Sc~f~UVBi0Ft5eK4ULivXrPMO3vIW1wMWeow8~3U-i47fzj4AmUqm3YftHG1DNJWNvSrHMrdnEIWmHxGtk0ZAzlc9fMTQWwHXEHSaOUImifpAowUKa3qjGtk5dXuwM3jk1EFdSNOMoqCDg__",
                    }}
                    width={60}
                    height={60}
                    borderRadius={15}
                  />
                  <View>
                    <Text className="text-lg font-bold pt-2 ">Johan Hawn</Text>
                    <Text className="text-base font-light text-gray-600">
                      Personal courier
                    </Text>
                  </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("home")}>
                  <View className="border-2 h-16 w-16 border-gray-200 rounded-xl  justify-center items-center">
                    <Feather name="phone-call" size={24} color="gray" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Delivery;
