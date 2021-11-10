import React,{useState} from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { Button,TextInput,Provider } from "react-native-paper";
import DatePicker from 'react-native-datepicker';
import DropDown from "react-native-paper-dropdown";

const UploadMed = ({navigation}) => {
  const [date, setDate] = useState('09-10-2021');
  const [text, setText] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState('');
  const genderList = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Non-binary",
      value: "Non-binary",
    },
  ];

  return (
    <Provider>
    <View style={styles.container}>
      <Text style={styles.textStyle}>Please fill out the form with the details of the medication you would like to upload</Text>
      <View style={styles.form} >
        <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
            <TextInput
            style={styles.inputstyle}
            label='Medication name'
            mode='outlined'
            outlineColor='#9AC4F8'
            >  
            </TextInput>
           

          </View>

          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            
          
           

        <TextInput style={styles.PrescInputStyle}
            label="Description"
            value={text}
            multiline={true}
            mode='outlined'
            outlineColor='#9AC4F8'
            onChangeText={text => setText(text)}
           >

           </TextInput>

          </View>

          
        </View>
      <Button icon="camera-outline" color='blue' mode="outlined" style={{margin:10}} onPress={() => navigation.navigate('TakePicture')} > Take Photo of medication</Button>
    
      </View>

      <View >
      <Button color='#9AC4F8' mode="contained" style={{margin:10}} onPress={() => Alert.alert("Details uploaded Successfully")} > Upload</Button>
      </View>

    </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    
  },
  buttonStyle:{
    justifyContent:'space-around',
    flexDirection:'row',
  },
 form:{
   flex: 2,
   margin:10,
 },
 inputstyle:{
   width:'100%',
   marginLeft:10,
   marginRight:10,
   margin:10,
 },
 PrescInputStyle:{
   width:'100%',
   height:100,
   margin: 10,
 },
 datePickerStyle: {
  width: '100%',
  margin: 10,
},
textStyle:{
  textAlign:'center',
  fontSize:20,
  fontFamily:'Roboto',
},
});

export default UploadMed;
