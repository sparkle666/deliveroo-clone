import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems } from '../features/basketSlice';
import {XCircleIcon} from 'react-native-heroicons/solid'
import { urlFor } from '../sanity';

const BasketScreen = ({navigation}) => {
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const dispatch = useDispatch()
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
  
  console.log(items)
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
        <ScrollView className = "mt-6 divide-y divide-gray-200">
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
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default BasketScreen