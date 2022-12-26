import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';
import { TouchableOpacity } from 'react-native';
import {XCircleIcon} from 'react-native-heroicons/solid'

const BasketScreen = ({navigation}) => {
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const dispatch = useDispatch()
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

  useMemo(()=> {
    // grouping items into one array
    // const groupedItems = items.reduce((results, item)=> {
    //   (results[item.id] = results[item.id] || []).push(item)
    //   return results
    // })
    // setGroupedItemsInBasket(groupedItems)
  }, [items])

  return (
    <SafeAreaView className = "bg-gray-100 w-full h-full">
      <View className = "flex-row justify-between p-4 space-x-16 bg-white shadow-xs">
        <View>
          <Text className = "font-bold text-xl text-center">Basket</Text>
          <Text className = "text-gray-400">{restaurant.title}</Text>
        </View>
        <View>
          <TouchableOpacity>
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
    </SafeAreaView>
  )
}

export default BasketScreen