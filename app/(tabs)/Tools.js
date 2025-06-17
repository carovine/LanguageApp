import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tools = () => {
  return (
    <View style={[styles.container]}>
      <Text>Tools</Text>
    </View>
  )
}

export default Tools


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})