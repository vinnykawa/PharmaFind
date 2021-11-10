import React,{useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button,TextInput,Provider } from "react-native-paper";
import DatePicker from 'react-native-datepicker';
import DropDown from "react-native-paper-dropdown";

const Register = ({navigation}) => {
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
      <Text style={styles.textStyle}>Please fill out the form with your details.</Text>
      <View style={styles.form} >
        <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <TextInput
            style={styles.inputstyle}
            label='first name'
            mode='outlined'
            outlineColor='#9AC4F8'
            >  
            </TextInput>
            <TextInput
            style={styles.inputstyle}
            label='Last name'
            mode='outlined'
            outlineColor='#9AC4F8'
            >  
            </TextInput>

          </View>

          

          <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
          <DropDown style={{width:'100%'}}
              label={"Gender"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={gender}
              setValue={setGender}
              list={genderList}
              outlineColor='#9AC4F8'
            />
          <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD/MM/YYYY"
          minDate="01-01-1900"
          maxDate="01-01-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: -5,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              borderColor : "gray",
              alignItems: "flex-start",
              borderWidth: 0,
              borderBottomWidth: 1,
            },
            placeholderText: {
              fontSize: 17,
              color: "gray"
            },
            dateText: {
              fontSize: 17,
            }
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />   

<View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
            
         
            <TextInput
            style={styles.inputstyle}
            label='KMPDC Reg No.'
            mode='outlined'
            outlineColor='#9AC4F8'
            >  
            </TextInput>

          </View>

          <Text style={styles.textStyle}>Business Details</Text>
          <View style={{flexDirection:'column',justifyContent:'space-evenly'}}>
          <TextInput
            style={styles.inputstyle2}
            label='Business Name'
            mode='outlined'
            outlineColor='#9AC4F8'
            >  
            </TextInput>
            <TextInput
            style={styles.inputstyle2}
            label='Address'
            mode='outlined'
            outlineColor='#9AC4F8'
            >  
            </TextInput>

            <TextInput
            style={styles.inputstyle2}
            label='Health Safety Code'
            mode='outlined'
            outlineColor='#9AC4F8'
            >  
            </TextInput>

            </View>




        

          </View>

          
        </View>
    
      </View>

      <View >
      <Button color='#9AC4F8' mode="contained" style={{margin:10}} onPress={() => navigation.navigate('Upload Medication')} > Submit</Button>
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
   width:'50%',
   marginLeft:10,
   marginRight:10,
   margin:10,
 },
 inputstyle2:{
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

export default Register;
