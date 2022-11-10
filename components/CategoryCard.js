import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgURL, title}) => {
  return (
    <TouchableOpacity className = "relative mr-2">
      <Image source = {{
        uri: imgURL
      }} 
      className = "w-20 h-20 rounded"
      />
      <Text className = "absolute bottom-1 left-1 font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard