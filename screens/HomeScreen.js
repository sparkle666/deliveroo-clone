import { View, Text, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    ChevronDownIcon, UserIcon, 
    MagnifyingGlassIcon, 
    AdjustmentsVerticalIcon} from 'react-native-heroicons/outline'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
  }, [])

  return (
    <SafeAreaView>
        <View className = "bg-white">
            <View className = "flex-row space-x-1 ml-2 items-center pt-5 px-2 mb-2">
                <Image source = {{
                    uri: "https://links.papareact.com/wru"
                }} 
                className = "w-7 h-7 rounded-full bg-gray-400 p-4"
                />
                <View className = "flex-grow">
                    <Text className = "text-xs font-bold text-gray-400">Deliver now!</Text>
                    <Text className = "font-bold text-xl">Current Location
                        <ChevronDownIcon size = {16} color = '#00CCBB' className = "" />
                    </Text>
                </View>
                <UserIcon size = {35} color = '#00CCBB' />
            </View>
            {/* Input */}
            <View className = "flex-row items-center px-3">
                <View className = "flex-row flex-1 space-x-2 bg-gray-200 p-2 rounded">
                    <MagnifyingGlassIcon  size = {20} color = 'gray' />
                    <TextInput
                    placeholder='Resturants and cuisines'
                    keyboardType='default'
                    />
                </View>
                <AdjustmentsVerticalIcon size = {24} color = '#00CCBB' />
            </View>
            <Text> Hello </Text>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen