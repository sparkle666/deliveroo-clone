import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ChevronIcon} from 'react-native-heroicons'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
  }, [])

  return (
    <SafeAreaView>
        <View className = "flex-row space-x-1 ml-2">
            <Image source = {{
                uri: "https://links.papareact.com/wru"
            }} 
            className = "w-7 h-7 rounded-full bg-gray-400 p-4"
            />
            <View>
                <Text className = "text-xd font-bold text-gray-400">Deliver now!</Text>
                <Text className = "font-bold text-xl">Current Location
                    <ChevronIcon />
                </Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen