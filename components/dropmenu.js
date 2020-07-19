import React, { useState } from "react";
import { View, Picker, StyleSheet, Text , Button, Alert} from "react-native";

const Drop = () => {
  const [selectedValue, setSelectedValue] = useState("breakfast");
  
  return (
    <View style={styles.container}>
     <Text style={styles.text}>Choose a meal:-</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) =>{ 
          setSelectedValue(itemValue);
          
        
        }
      }
      >
        <Picker.Item label="Breakfast" value="breakfast" />
        <Picker.Item label="Lunch" value="lunch" />
        <Picker.Item label="Dinner" value="dinner" />
        <Picker.Item label="Specials" value="specials" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
  text:{
    
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  buttonContainer:{
      flexDirection:'column',
      paddingTop:20,
      color:'green',
  },
});

export default Drop;