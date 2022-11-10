import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import sushi1 from '../assets/images/sushi1'

const Categories = () => {
  return (
    <ScrollView horizontal
     contentContainerStyle = {{
        paddingHorizontal: 15,
        paddingTop: 10
     }} >
      <CategoryCard imgURL = "https://links.papareact.com/gn7" title = "Testing 1" />
      <CategoryCard imgURL = "https://links.papareact.com/gn7" title = "Testing 2" />
      <CategoryCard imgURL = "https://links.papareact.com/gn7" title = "Testing 3" />
      <Image source = {{
        uri: "https://links.papareact.com/gn7"
      }}
      />
    </ScrollView>
  )
}

export default Categories