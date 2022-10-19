import { HomeScreen } from './screens/HomeScreen';
import { DetailScreen } from './screens/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'fade_from_bottom',
          statusBarAnimation: 'slide',
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Rick and Morty"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#1D1D1D',
            },
            headerTintColor: '#fff',
            navigationBarColor: '#121212',
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerStyle: {
              backgroundColor: '#1D1D1D',
            },
            headerTintColor: '#fff',
            navigationBarColor: '#121212',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
