import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title, description, featuredCategory}) => {
  return (
    <View style = {{
        marginTop: 10,
        paddingHorizontal: 14
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
            color: 'gray'
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
        <RestaurantCard />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow