import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({img, title}) => {
  return (
    <TouchableOpacity style = {{position: "relative", marginRight: 10}}>
      <Image source = {img} 
      className = "w-20 h-20 rounded"
      style = {{width: 70, height: 70, borderRadius: 10}}
      />
      <Text className = "absolute bottom-1 left-1 font-bold bg-red-200"
        style = {{
          position: 'absolute',
          bottom: 4,
          left: 4,
          fontWeight: 'bold',
          color: 'white'
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard