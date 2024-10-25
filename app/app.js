import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './Navigation/TabNavigator';
import LoadingScreen from './Screens/LoadingScreen';

const Stack = createStackNavigator();

const App = () => {
  // State to manage loading (splash screen visibility)
  const [isLoading, setIsLoading] = useState(true);

  // Effect to set a timer for splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Setting isLoading to false");
      setIsLoading(false); // Stop loading after 3 seconds
    }, 3000);

    // Clean up timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer key={isLoading ? "loading" : "main"}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main">
          {() => (isLoading ? <LoadingScreen /> : <TabNavigator />)}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;