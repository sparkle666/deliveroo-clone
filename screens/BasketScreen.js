import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import {XCircleIcon} from 'react-native-heroicons/solid'
import { urlFor } from '../sanity';

const BasketScreen = ({navigation}) => {
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const dispatch = useDispatch()
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
  
  const itemTotal = useSelector(selectBasketTotal)

  useMemo(()=> {
    // grouping items into one array
    if(items.length > 0){
      const groupedItems = items.reduce((results, item)=> {
        (results[item.id] = results[item.id] || []).push(item)
        return results
      }, {})
      setGroupedItemsInBasket(groupedItems)
    }
  }, [items])

  return (
    <SafeAreaView className = "bg-gray-100 w-full h-full">
      <View className = "flex-row justify-between p-4 space-x-16 bg-white shadow-xs">
        <View>
          <Text className = "font-bold text-xl">Basket</Text>
          <Text className = "text-gray-400">{restaurant.title}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <XCircleIcon size={40} color = "#00CCBB" />
          </TouchableOpacity>
        </View>
      </View>
      <View className = "flex-row justify-between mt-6 bg-white p-4 items-center">
        <View className = "flex-row items-center space-x-3">
          <Image source = {{
              uri: "https://links.papareact.com/wru"
            }} 
            className = "w-7 h-7 rounded-full bg-gray-400 p-4"
          />
          <Text className = "text-gray-500">Deliver in 30 - 70 mins</Text>
        </View>
        <TouchableOpacity>
          <Text className = "text-[#00CCBB]">Change</Text>
        </TouchableOpacity>
      </View>

      {items.length <= 0 ? (
        <View className = "flex justify-center items-center py-12">
          <Text className = "font-bold text-gray-400 text-2xl">There are no items in your basket</Text>
        </View>
      ) : (
        <View>
          <ScrollView className = "mt-6 divide-y divide-gray-200"
            contentContainerStyle = {{paddingBottom: 170}}
          >
            {Object.entries(groupedItemsInBasket).map(([key, item])=> (
              <View key = {key} 
              className = "flex-row items-center space-x-3 px-4 bg-white py-2">
                <Text className = "text-[#00CCBB] font-bold">{item.length} x </Text>
                <Image source={{uri: urlFor(item[0]?.image).url()}}
                resizeMode = "cover"
                className = "h-12 w-12 rounded-full"
                />
                <Text className = "flex-1">{item[0]?.name}</Text>
                <Text className = "text-gray-600 font-bold">${item[0]?.price}</Text>
                <TouchableOpacity onPress={()=> dispatch(removeFromBasket({id: key}))}>
                  <Text className = "text-[#00CCBB] text-xs w-full">Remove</Text>
                </TouchableOpacity>
              </View>
            ))}
          <View className = "bg-white px-4 space-y-2 py-2 mt-2">
            <View className = "flex-row justify-between">
              <Text className = "text-gray-400">Subtotal</Text>
              <Text className = "text-gray-400">${itemTotal}</Text>
            </View>
            <View className = "flex-row justify-between">
              <Text className = "text-gray-400">Delivery Fee</Text>
              <Text className = "text-gray-400">$5.99</Text>
            </View>
            <View className = "flex-row justify-between">
              <Text className = "font-extrabold">Grand Total</Text>
              <Text className = "font-extrabold">${itemTotal + 5.99}</Text>
            </View>
            <TouchableOpacity className = "w-full bg-[#00CCBB] p-4 rounded-lg">
              <Text className = "text-white text-center font-extrabold text-lg"> Place Order </Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  )
}

export default BasketScreen