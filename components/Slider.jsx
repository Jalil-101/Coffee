import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Slider = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View className="pt-4">
            <View className="p-4  ">
              <View className="flex-row gap-4 " >
                <View className="border-2 w-32 h-10 rounded-xl  border-[#C67C4E] bg-[#C67C4E] justify-center items-center">
                  <Text className=" text-lg font-semibold text-white">
                    Cappuccino
                  </Text>
                </View>
                <View className="border-2 w-32 h-10 rounded-xl  border-white bg-white justify-center items-center">
                  <Text className=" text-lg font-semibold text-black">
                    Machiatto
                  </Text>
                </View>
                <View className="border-2 w-32 h-10 rounded-xl  border-white bg-white justify-center items-center">
                  <Text className=" text-lg font-semibold text-black">
                    Latte 
                  </Text>
                </View>
                <View className="border-2 w-32 h-10 rounded-xl  border-white bg-white justify-center items-center">
                  <Text className=" text-lg font-semibold text-black">
                    Americano
                  </Text>
                </View>
                <View className="border-2 w-32 h-10 rounded-xl  border-white bg-white justify-center items-center">
                  <Text className=" text-lg font-semibold text-black">
                    Expresso
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
    );
}

export default Slider