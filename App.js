import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Intro from './app/screens/Intro';
import NoteScreen from './app/screens/NoteScreen';
import Sign_in from './app/screens/Sign_in';
import Sign_up from './app/screens/Sign_up';
import NoteDetail from './app/components/NoteDetail';
import NoteProvider from './app/contexts/NoteProvider';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState({});
  const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false);
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');

    if (result === null) return setIsAppFirstTimeOpen(true);

    setUser(JSON.parse(result));
    setIsAppFirstTimeOpen(false);
  };

  useEffect(() => {
    findUser();
  }, []);

  return (
    <NavigationContainer>
      <NoteProvider>
        <Stack.Navigator
          screenOptions={{ headerTitle: '', headerTransparent: true }}
        >
          <Stack.Screen component={Sign_in} name='sign_in' />
          <Stack.Screen component={NoteScreen} name='NoteScreen' />
          <Stack.Screen component={NoteDetail} name='NoteDetail' />
          <Stack.Screen component={Sign_up} name='sign_up' />
          <Stack.Screen component={Intro} name='intro' />
        </Stack.Navigator>
      </NoteProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});