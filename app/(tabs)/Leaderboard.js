import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Leaderboard = () => {
  return (
    <View style={[styles.container]}>
      <Text>Leaderboard</Text>
    </View>
  )
}

export default Leaderboard


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})