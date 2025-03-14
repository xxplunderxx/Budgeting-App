import { View, StyleSheet, Text } from 'react-native';

import { GetStarted } from '@/components/Login/GetStarted';
import { NavigationContainer } from '@react-navigation/native';
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoogleOAuthButton from '@/components/Login/Oauth/GoogleButton';

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={GetStarted}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Profile" component={GoogleOAuthButton} />
		</Stack.Navigator>
	);
}