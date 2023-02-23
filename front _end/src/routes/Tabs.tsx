import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewMatch from "../screen/NewMatch";
import Teams from "../screen/Teams";
import Historys from "../screen/History";
import { Icon } from "@rneui/themed";

const Tabs = createBottomTabNavigator();

const CricTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName = "";
          if (route.name === "NewMatch") {
            iconName = "sports-cricket";
            color = focused ? "#fc814a" : "black";
          } else if (route.name === "Teams") {
            iconName = focused ? "people" : "people-outline";
            color = focused ? "#fc814a" : "black";
          } else {
            iconName = "history";
            color = focused ? "#fc814a" : "black";
          }

          return <Icon name={iconName} color={color} />;
        },
      })}
    >
      <Tabs.Screen name={"NewMatch"} component={NewMatch}></Tabs.Screen>
      <Tabs.Screen name="Teams" component={Teams}></Tabs.Screen>
      <Tabs.Screen name="History" component={Historys}></Tabs.Screen>
    </Tabs.Navigator>
  );
};

export default CricTabs;
