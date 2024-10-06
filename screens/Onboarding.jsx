import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Tabs from "../components/Tabs";
import Slider from "../components/Slider";

const Onboarding = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-black">
      <SafeAreaView>
        <View>
          <View>
            <Image
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/b312/299d/b7d25cf7008be3a0b1be7c883c7455df?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MUxSSil1e3q3V7Do9BLftRi1yofBRke1Uu7cMJqjgSDkNNvM2eaXVIJ5eTFmnGDl-xU2e2oOUPsw8PyOXT~wRDllnVamGztMEK-uz8Sc6Q8rrtxVkdCtvgAy0l5Sj-HRSxUbonvNKV39ZhKfx-NWzE8QWhsOWWO7bzPfaSiNKqXCv9hiuqrLQjgzbLubXwGd8OYdXNowXb~vKb9XoX6QYXGZcjElus~Ct1S91YkXqh357~JN7TJrDfGwTUE73pCKuxgPx7na9AZKS4X~MXOVo7Nh-eS-1cXEBfKzbt0DFAKoPhG2swjAl8RVdc~dnb5FZoRYQwzemVlU6YxObcqLLA__",
              }}
              resizeMode=" cover"
              height={500}
              width={380}
            />
            <View className="absolute bottom-0 left-0 right-0 top-100 ">
              <Text className="text-5xl text-white font-bold text-center">
                Coffee so good,
              </Text>
            </View>
          </View>

          {/* two images middle */}

          <View>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbL-97lyEZjytQpiKGKuuDxuj4QIJs-I_aWg&s",
              }}
              resizeMode=" cover"
              height={250}
              width={400}
            />
            <View className="absolute bottom-10 left-0 right-0 top-0">
              <Text className="text-4xl text-white text-center font-bold">
                your taste buds
              </Text>
              <Text className="text-4xl text-white text-center font-bold">
                will love it.
              </Text>
              <Text className="text-xl text-white text-center font-light">
                The best grain, the finest roast, the
              </Text>
              <Text className="text-xl text-white text-center font-light">
                powerful flavour
              </Text>
              <View className="items-center pt-6  mb-">
                <TouchableOpacity
                  onPress={() => navigation.navigate("tabs")}
                  className="border-2 w-3/4 h-16 rounded-xl bg-[#C67C4E] justify-center items-center
"
                >
                  <Text className="text-xl text-white font-bold ">
                    Get Start
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Onboarding;
