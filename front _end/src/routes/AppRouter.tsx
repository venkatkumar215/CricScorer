import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CricTabs from "./Tabs";
import { HeaderTitle, HeaderIcon } from "../components/header/Header";

const Stack = createNativeStackNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerStyle: {   backgroundColor:'#fc814a' } }}>
        <Stack.Screen
          options={{
            headerTitle: (props) => <HeaderTitle />,
            headerRight: () => <HeaderIcon />,
          }}
          name="Home"
          component={CricTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
