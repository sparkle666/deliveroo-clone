import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Categories = () => {
  return (
    <ScrollView horizontal
     contentContainerStyle = {{
        paddingHorizontal: 15,
        paddingTop: 10
     }} >
      <Text>Categories</Text>
    </ScrollView>
  )
}

export default Categories