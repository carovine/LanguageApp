import Slider from '@react-native-community/slider';



import { StyleSheet } from 'react-native'

const FontComponent = () => {
  return (
    <Slider
  style={{width: 200, height: 40}}
  minimumValue={0}
  maximumValue={1}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
/>

  )
}

export default FontComponent

const styles = StyleSheet.create({})