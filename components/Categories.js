import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import sushi1 from '../assets/images/sushi-1.jpg'

const Categories = () => {
  return (
    <ScrollView horizontal
     contentContainerStyle = {{
        paddingHorizontal: 15,
        paddingTop: 10
     }} 
     showsHorizontalScrollIndicator = {false}
     >
      <CategoryCard img = {sushi1} title = "Testing 1" />
      <CategoryCard img = {sushi1} title = "Testing 2" />
      <CategoryCard img = {sushi1} title = "Testing 3" />
      <CategoryCard img = {sushi1} title = "Testing 1" />
      <CategoryCard img = {sushi1} title = "Testing 2" />
      <CategoryCard img = {sushi1} title = "Testing 3" />
    </ScrollView>
  )
}

export default Categories