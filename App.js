import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Router from 'navigation/Router'
import Login from 'screen/Common/Login'

const App = () => {
  return (
    <View>
      {/* <Router/> */}
      <Login/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})