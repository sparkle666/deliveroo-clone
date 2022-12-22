import {Text, TouchableOpacity, View} from 'react-native';
import { useSelector } from 'react-redux';
import React from "react"
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';

const BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBasketTotal)

    // if (items.length === 0) return null
    
    return (
        <View className = "absolute bg-red-300 bottom-10 w-full z-4" style = {{
            backgroundColor: "#fff",
            padding: 16,
            width: '100%',
        }}>
            <TouchableOpacity style = {{
                 display: 'flex',
                 flexDirection: 'row',
                 justifyContent: 'space-around',
                 padding: 10,
                 width: "100%",
                 backgroundColor: "#00ccbb",
                 margin: 'auto',
                 borderRadius: 6,
                 alignItems: 'center'
            }}>
                <Text style = {{
                        color: 'white',
                        backgroundColor: "#01a296",
                        padding: 8,
                        borderRadius: 8,
                        fontWeight: "800",
                        fontSize: 16
                    }}>{items.length}</Text>
                <Text style = {{
                        color: 'white',
                        fontWeight: "800",
                        fontSize: 16,
                        width: 150,
                        padding: 8
                    }}
                    onPress = {()=> navigation.navigate("BasketScreen")}>View Basket</Text>
                <Text style = {{
                        color: 'white',
                        fontWeight: "800",
                        fontSize: 16
                    }}>${basketTotal}</Text>
            </TouchableOpacity>  
        </View>
    );
}

export default BasketIcon;