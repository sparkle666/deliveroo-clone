import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'


const RestaurantCard = ({
    id, imgURL,
    title, rating,
    genre, address,
    short_description,
    dishes,
    long,
    lat
}) => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity style = {{
      backgroundColor: 'white',
      marginRight: 8
    }}
    onPress = {()=> navigation.navigate("RestaurantScreen", {
      id, 
      imgURL,
      title, 
      rating,
      genre, 
      address,
      short_description,
      dishes,
      long,
      lat
    })}
    >
      <Image source = {{uri: imgURL}}
       style = {{
        height: 144,
        width: 256,
        borderRadius: 4,
       }}
       resizeMode = "cover"
       />
       <View style = {{
        paddingHorizontal: 6,
        paddingTop: 8
       }}>
        <Text style = {{
          fontWeight: "bold",
          paddingTop: 2,
          fontSize: 16
        }}> 
          {title} 
        </Text>
       </View>
       <View style = {{
          display: 'flex',
          flexDirection: "row",
          alignItems: 'center',
          paddingHorizontal: 6,
       }}>
        <StarIcon color = "green" opacity={0.4} size = {22} />
        <Text>
          <Text> {rating}</Text> - {genre}
        </Text>
       </View>
       <View style = {{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingBottom: 8
       }}>
        <MapPinIcon color = "gray" size = {22} opacity = {0.4} />
        <Text> Nearby - {address} </Text>
       </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard