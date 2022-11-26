import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {urlFor} from "../sanity"
const DishRow = ({id, name, short_description, price, image}) => {
  return (
    <TouchableOpacity style = {{
        backgroundColor: "white",
        padding: 12,
        borderBottomWidth: 1,
        borderColor: "#eee"
    }}>
        <View  style = {{
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
            <View>
                <Text className = "bg-red-300 text-lg font-bold"
                style = {{
                    fontWeight: "bold",
                    fontSize: 18,
                }}
                >{name}</Text>
                <Text style = {{
                    color: "#333"
                }}>{short_description}</Text>
                <Text>${price}.00</Text>
            </View>
            <Image source = {{
                uri: urlFor(image).url()
            }} 
            resizeMode = "cover"
            className = "h-12 w-12 rounded-sm"
            style = {{
                width: 80,
                height: 80,
                borderRadius: 10
            }}
            />
        </View>
    </TouchableOpacity>
  )
}

export default DishRow