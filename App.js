import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Pages/Home'
import All from './src/Pages/All'
import Favorite from './src/Pages/Favorite'


const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen name="All" component={All}
          options={{
            headerTitleStyle: {
              fontSize: 22,
            },
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen name="Favorite" component={Favorite} 
          options={{
            headerTitleStyle: {
              fontSize: 22,
            },
            headerTitleAlign: "center",
            headerTitle:"Favorite"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
