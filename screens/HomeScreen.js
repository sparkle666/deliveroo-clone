import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    ChevronDownIcon, UserIcon, 
    MagnifyingGlassIcon, 
    AdjustmentsVerticalIcon
    } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import client from "../sanity"

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
  }, [])

  useEffect(()=>{
    client.fetch(`
    *[_type  == "featured"]{...,
        restaurant[] -> {..., 
            dishes[]-> {...}
        }             
       }
    `).then(data => setFeaturedCategories(data))

  }, [])

  return (
    <SafeAreaView>
        <View className = "bg-white">
            <View className = "flex-row space-x-1 ml-2 items-center pt-5 px-2">
                <Image source = {{
                    uri: "https://links.papareact.com/wru"
                }} 
                className = "w-7 h-7 rounded-full bg-gray-400 p-4"
                />
                <View className = "flex-grow">
                    <Text className = "text-xs font-bold text-gray-400">Deliver now!</Text>
                    <Text className = "font-bold text-xl">Current Location
                        <ChevronDownIcon size = {16} color = '#00CCBB' />
                    </Text>
                </View>
                <UserIcon size = {35} color = '#00CCBB' />
            </View>
            {/* Input */}
            <View className = "flex-row items-center px-3 pb-3">
                <View className = "flex-row flex-1 space-x-2 bg-gray-200 p-2 rounded">
                    <MagnifyingGlassIcon  size = {20} color = 'gray' />
                    <TextInput
                    placeholder='Resturants and cuisines'
                    keyboardType='default'
                    style = {{width: 'auto'}}
                    />
                </View>
                <AdjustmentsVerticalIcon size = {24} color = '#00CCBB' />
            </View>
        </View>
        {/* Categories */}
        
        <ScrollView className = 'bg-gray-200'
        contentContainerStyle = {{
            paddingBottom: 130
        }}
        >
            <Categories />
            {/* Featured rows */}
            {featuredCategories?.map(category => (
                <FeaturedRow 
                    key = {category._id}
                    title = {category.name}
                    description = {category.short_description}
                    id = {category._id}
                    />
            ))}
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

// Write an article on bugs and tradeoffs concerned with ScrollVIew like components out of bounds
// And why FlatList is better. Fix is to add more padding to the scroolview bottom.
// Another frequent bug encountered is with the expo app. At times it freezes up and keeps showing home error.
// - Styling a react native scrollview is imposible with nativewind
// Fix is to clear cache and or clear data.

