import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React, {useLayoutEffect} from 'react'
import {ArrowLeftIcon, ArrowRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/solid';
import DishRow from '../components/DishRow';

const RestaurantScreen = ({navigation, route}) => {
  const {
    id, 
    imgURL,
    title, 
    rating,
    genre, 
    address,
    short_description,
    dishes,
    long,
    lat
  } = route.params;
  // used when the components gets painted in the screen
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <ScrollView>
      <View style = {{
        position: "relative"
      }}>
        <Image source = {{
          uri: imgURL
        }} 
        style = {{
          width: "100%",
          height: 224
         }}
         className = "h-60 w-full p-4 bg-gray-300"
         resizeMode='cover'
        />
        <TouchableOpacity
        className = "absolute top-10 left-5 p-3 bg-gray-100 rounded-full shadow-lg"
        onPress={()=> navigation.goBack()}
        >
          <ArrowLeftIcon size = {20} color = "#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className = "bg-white px-2 pt-6">
        <Text className = "text-3xl font-bold">{title}</Text>
        <View>
          <View className = "flex-row items-center space-x-1">
            <StarIcon size = {20} color = "#00CCBB" />
            <Text>{rating} {" "} {genre}</Text>
            <MapPinIcon size = {20} color = "lightgrey" />
            <Text>Nearby - {address}</Text>
          </View>
          <Text className = "py-2 text-gray-800 font-light">{short_description}</Text>
        </View>
        <TouchableOpacity className = "mt-2 border-y py-4 border-gray-300">
          <View className = "flex-row items-center justify-between">
            <View className = "flex-row items-center space-x-1">
              <QuestionMarkCircleIcon size = {22} color = "#00CCBB"/>
              <Text>Have a Food allergy?</Text>
            </View>
            <View>
              <ArrowRightIcon size = {22} color = "#00CCBB" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View className = "px-3 my-3">
        <Text className = "font-bold text-2xl">Menu</Text>
      </View>
      {dishes?.map((dish, id) => {
        return (
          <DishRow 
            key = {dish._id + id}
            id = {dish._id}
            name = {dish.name}
            short_description = {dish.short_description}
            price = {dish.price}
            image = {dish.image}
          />
        )
      })}
    </ScrollView>
  )
}

export default RestaurantScreen


// Image needs to be specified witht and height to load