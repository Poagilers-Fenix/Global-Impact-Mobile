import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, View } from "react-native";

import InitialScreen from "./pages/InitialScreen";
import CompanyRegistration from "./pages/CompanyRegistration";
import CompanyLogin from "./pages/CompanyLogin";
import MenuScreen from "./pages/MenuScreen";
import CreateItem from "./pages/CreateItem";
import LoginOrRegister from "./pages/LoginOrRegister";
import ResumeSreen from "./pages/ResumeSreen";
import EditItem from "./pages/EditItem";

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
        <Stack.Screen name="CompanyLogin" component={CompanyLogin} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="CreateItem" component={CreateItem} />
        <Stack.Screen name="LoginOrRegister" component={LoginOrRegister} />
        <Stack.Screen name="ResumeSreen" component={ResumeSreen} />
        <Stack.Screen name="EditItem" component={EditItem} />
      </Stack.Navigator>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    </NavigationContainer>
  );
}
