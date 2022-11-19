import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sushi from "../assets/images/sushi-1.jpg"

const FeaturedRow = ({title, description, featuredCategory}) => {
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
        <RestaurantCard 
         id = {123} imgURL = {sushi}
         title = "Yo Sushi" rating = {3}
         genre = "Japanese" address = "123 street"
         short_description = "A short description"
         dishes = {[]}
         long = {20}
         lat = {34}
         />
        <RestaurantCard 
         id = {123} imgURL = {sushi}
         title = "Yo Sushi" rating = {3}
         genre = "Japanese" address = "123 street"
         short_description = "A short description"
         dishes = {[]}
         long = {20}
         lat = {34}
         />
        <RestaurantCard 
         id = {123} imgURL = {sushi}
         title = "Yo Sushi" rating = {3}
         genre = "Japanese" address = "123 street"
         short_description = "A short description"
         dishes = {[]}
         long = {20}
         lat = {34}
         />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow