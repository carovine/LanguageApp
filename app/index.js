import { Text, View,Switch,StyleSheet,ScrollView } from "react-native";
import DropdownComponent from "./components/DropdownComponent";
import ProfilePage from './components/ProfilePage'
import { useEffect, useState } from "react";

import Slider from '@react-native-community/slider';



export default function Index() {
  const [SelectedLanguage, setSelectedLanguage] = useState({ 
    label: 'Tamil',
    value:'tm'
  })
  const [isSecond, setisSecond] = useState(false)

  const [fontSize, setfontSize] = useState(3)
  
  return (

    <ScrollView contentContainerStyle={styles.contentContainer}
    >
        <DropdownComponent onSelectLanguage={setSelectedLanguage}  />
        <View style={[styles.ToggleContainer]} >
          <Text>Eng</Text>
          <Switch value={isSecond} onChange={()=>!isSecond? setisSecond(true):setisSecond(false)} />
          <Text>{SelectedLanguage.label}</Text>
        </View>
        <View style={[styles.ToggleContainer]}>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={1}
            maximumValue={5}
            minimumTrackTintColor="#000080"
            maximumTrackTintColor="#000000"
            thumbTintColor="#000080"
            onValueChange= {(value)=>{
              setfontSize(value)
              }}
            value={3}
            step={1}
          />
          <Text>Font Size:{fontSize}</Text>
        </View>
      <ProfilePage toggleValue = {isSecond} SelectedLanguage={SelectedLanguage.value} SizeFont={fontSize} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ToggleContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center"
  },
  contentContainer:{
    backgroundColor:"#f9f9f9",
    alignItems:"center"
  },
  
})
