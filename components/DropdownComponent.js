import { StyleSheet,Text, View } from "react-native";
import {Dropdown} from 'react-native-element-dropdown'
import {useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';



const languages = [
  { 
    label: 'Tamil',
    value:'tm'
  },
  { 
    label: 'Japanese',
    value:'jn'
  },
  { 
    label: 'French',
    value:'fr'
  },
  { 
    label: 'Telugu',
    value:'tl'
  },
  { 
    label: 'Spanish',
    value:'sp'
  },
]


function DropdownComponent({ onSelectLanguage }) {
  const [value, setvalue] = useState(null)
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };

  return (
    <Dropdown
    mode="modal"
    style={[styles.dropdown,  isFocus && { borderColor: 'blue' }]}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    inputSearchStyle={styles.inputSearchStyle}
    iconStyle={styles.iconStyle}
    data={languages}
    search
    maxHeight={300}
    labelField="label"
    valueField="value"
    placeholder='Select Secondary Language:'
    searchPlaceholder="Search..."
    value=''
    onFocus={() => setIsFocus(true)}
    onBlur={() => setIsFocus(false)}
    onChange={item => {
            setvalue(item.value);
            setIsFocus(false);
            onSelectLanguage(item);
          }}
    renderLeftIcon={() => (<Ionicons name="language" style={[styles.icon]} />)}
        />

  )
}

export default DropdownComponent


const styles = StyleSheet.create({
  dropdown:{
    marginVertical:10,
    height: 50,
    width:'90%',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  label:{
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
  },
  placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 30,
      height: 30,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    icon: {
      marginRight: 5,
      
    },
})