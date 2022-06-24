// @ts-nocheck
import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native'
import { Appbar } from 'react-native-paper';
import React from 'react'
import NavBar from './navbar';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Appbar.Header>
        <Appbar.Content title="Home" color="white" style={styles.HeaderContent}/>
      </Appbar.Header>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight+5 : 1
  },
  HeaderContent:{
    justifyContent: "center",
  }
});