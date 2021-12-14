import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GifListScreen } from './src/containers/git-list-screen';
import { GifDetailsScreen } from './src/containers/gif-details-screen';
import { GifFavoritesScreen } from './src/containers/gif-favorites-screen'
import { SearchScreen } from './src/containers/search-screen'
import { SafeAreaView } from 'react-native';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
  
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="gifList" component={GifListScreen} options={{ headerShown: false }} />
          <Stack.Screen name="gifDetails" component={GifDetailsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Favorites" component={GifFavoritesScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  
  )
}

export default App;
