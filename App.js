import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Screen imports
import HomeScreen from './src/screens/HomeScreen';
import ScoreScreen from './src/screens/ScoreScreen';


// Constant variable for stack navigation
const Stack = createStackNavigator();


// Create stack for main application
function AppStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ 
          title: "New York City Schools",
          headerStyle: {
						backgroundColor: 'grey'
					}
        }}
      />

      <Stack.Screen 
        name="SchoolScores" 
        component={ScoreScreen}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  )
}


// Return main stack for application
export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
