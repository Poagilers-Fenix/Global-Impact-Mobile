import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import InitialScreen from "./pages/InitialScreen";
import CompanyRegistration from "./pages/companyRegistration";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen
          name="CompanyRegistration"
          component={CompanyRegistration}
        />
      </Stack.Navigator>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    </NavigationContainer>
  );
}
