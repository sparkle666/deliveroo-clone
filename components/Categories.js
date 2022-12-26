import { View, Text, ScrollView, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import CategoryCard from './CategoryCard'
import sushi1 from '../assets/images/sushi-1.jpg'
import client, { urlFor } from '../sanity'


const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    client.fetch(`
      *[_type == "category"]
    `).then(data => {
      setCategories(data)
    })
  }, [])
  
  return (
    <ScrollView horizontal
     contentContainerStyle = {{
        paddingHorizontal: 15,
        paddingTop: 10
     }} 
     showsHorizontalScrollIndicator = {false}
     >
      {categories?.map(category => {
        return (
          <CategoryCard key = {category._id} 
          img = {urlFor(category.image).url()} 
          title = {category.name} />
        )
})}
    </ScrollView>
  )
}

export default Categories