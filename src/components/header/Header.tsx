import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from '@rneui/themed';

export const HeaderTitle = () => {
  return (
    <SafeAreaView style={styles.headerWrapper}>
      <Text style={styles.headerTitleContent}>MyCricket</Text>
      <Text style={styles.headerSubTitle}>Scorer</Text>
    </SafeAreaView>
  );
};
export const HeaderIcon = () => {
  return (
    <SafeAreaView style={styles.headerIcon} >
       <Icon
        name='settings' />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 10,
    padding:0,
    margin: 0,
  
  },

  headerTitleContent: {
    fontWeight: "bold",
    fontSize: 24,
    color:'#ffff'
  },
  headerSubTitle: {
    fontWeight: "bold",
    fontSize: 14,
    paddingTop: 5,
    paddingLeft: 2,
    color:'#ffff'
  },
  headerIcon:{
    paddingBottom:10
  }
});
