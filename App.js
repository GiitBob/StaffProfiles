import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileViewScreen from './screens/ProfileViewScreen';
import ProfileEditScreen from './screens/ProfileEditScreen';
import NewProfileScreen from './screens/NewProfileScreen';
import NewAccountScreen from './screens/NewAccountScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ProfileView" component={ProfileViewScreen} />
        <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
        <Stack.Screen name="NewProfile" component={NewProfileScreen} />
        <Stack.Screen name="NewAccount" component={NewAccountScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
