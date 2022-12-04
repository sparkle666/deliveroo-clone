import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import SecondScreen from './screens/SecondScreen';
import { Provider } from 'react-redux'
import { store } from './store';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Provider store = {store}>
        <Stack.Navigator initialRouteName='HomeScreen'>
          <Stack.Screen name = "HomeScreen" component = {HomeScreen}/>
          <Stack.Screen name = "SecondScreen" component = {SecondScreen}/>
          <Stack.Screen name = "RestaurantScreen" component = {RestaurantScreen}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}



// https://stackoverflow.com/questions/61185135/react-native-navigation-error-the-action-navigate-with-payload-name-192-168

// The name props for screen and the component name must match unless you get an error.
