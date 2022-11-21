import { View, Text, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sushi from "../assets/images/sushi-1.jpg"
import client, { urlFor } from "../sanity"

const FeaturedRow = ({id, title, description}) => {
  const [restaurants, setRestaurant] = useState([])

  useEffect(() => {
    client.fetch(`*[_type  == "featured" && _id == $id]
      {...,
        restaurant[] -> {..., 
          dishes[]-> {...}
          }             
     }[0]`, {id})
     .then(data => setRestaurant(data?.restaurant))
  }, [])
  
  return (
    <View style = {{
        marginTop: 10,
        paddingHorizontal: 14,
    }}>
      <View className = 'flex-row justify-between'
        style = {{
            display: 'flex',
            flexDirection: 'row',
            paddingTop: 10,
            alignItems: "center",
            justifyContent: "space-between"
        }}
      >
        <Text
        style = {{
            fontSize: 18,
            fontWeight: 'bold'
        }}
        >
            {title}
        </Text>
        <ArrowRightIcon color = "#00CCBB" />
      </View>
      <Text className = "text-xs text-gray-500"
        style = {{
            fontSize: 12,
            color: 'gray',
            paddingVertical: 8
        }}
      >
        {description}
      </Text>
      <ScrollView horizontal 
      showsHorizontalScrollIndicator = {false}
      contentContainerStyle = {{
        paddingHorizontal: 10
      }}
      >
        {/* Resturant cards */}

        {restaurants.map(restaurant => (
          <RestaurantCard 
           key = {restaurant._id}
           id = {restaurant._id} 
           imgURL = {urlFor(restaurant.image).url()}
           title = {restaurant.title} 
           rating = {restaurant.rating} 
           genre = "Japanese" 
           address = {restaurant.address} 
           short_description = {restaurant.short_description} 
           dishes = {[]}
           long = {restaurant.long} 
           lat = {restaurant.lat} 
           />

          ))}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow