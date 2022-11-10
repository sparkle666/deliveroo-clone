import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false
    })
  }, [])

  return (
    <SafeAreaView>
        <View>
            <Image source = {{
                uri: "https://links.papareact.com/wru"
            }} 
            className = "w-7 h-7 round"
            />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen