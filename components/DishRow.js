import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import {urlFor} from "../sanity"
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import {useDispatch, useSelector} from "react-redux"
import { addToBasket, removeFromBasket, selectBasketItemWithId } from '../features/basketSlice'

const DishRow = ({id, name, short_description, price, image}) => {

    const [isPressed, setisPressed] = useState(false)
    // Use to show the popup below Opacty view
    const dispatch = useDispatch()
    const items = useSelector(state => selectBasketItemWithId(state, id))

    const addItemToBasket = () => {
        dispatch(addToBasket({id, name, short_description, price, image}))
    }

    const removeItemFromBasket = () =>{
        if(!items.length > 0) return;

        dispatch(removeFromBasket({id}))
    }
    console.log(items)
  return (
    <>
    
        <TouchableOpacity 
        onPress={()=> setisPressed(!isPressed)}
        style = {{
            backgroundColor: "white",
            padding: 12,
            borderBottomWidth: isPressed ? 0 : 1,
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
                        color: "#333",
                        width: 250,
                        marginVertical: 8
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

        {isPressed && 
            <View style = {{
                backgroundColor: "white",
                borderBottomWidth: 1,
                borderColor: "#eee",
                paddingHorizontal: 6
            }}>
                <View style = {{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <TouchableOpacity onPress = {removeItemFromBasket} 
                    disabled = {items.length <= 0 ? true: false}>
                        <MinusCircleIcon size = {40} color = {items.length > 0 ? "#00CCBB": "gray"} />
                    </TouchableOpacity>
                    <Text
                    style = {{
                        marginHorizontal: 4
                    }}
                    >{items.length} </Text>
                    <TouchableOpacity onPress={addItemToBasket}>
                        <PlusCircleIcon size = {40} color = "#00CCBB" />
                    </TouchableOpacity>
                </View>
            </View>
        }
    </>
  )
}

export default DishRow