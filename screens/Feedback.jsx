import React, {useState} from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import { TextInput } from "react-native-paper";

const Feedback = () => {
    
    return(
        <View style={styles.container}>
            <Image
            source={require("../assets/7882.jpg")}
            style={{
              width: '100%',
              height: '50%',
              margin: 10,
              resizeMode: "stretch",
            }}
          /> 
            <Text style={styles.inputstyle}>Your Prescription has been successfully submited and is under review.{'\n'}{'\n'}
            We will send you a sms notification with a link containing details on the availability and location of your medication.</Text>
           
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:2,
        alignItems:"center",
        justifyContent:"space-around",
        backgroundColor: 'white'
        
    },
    inputstyle:{
        flex:1,
        width:"100%",
        alignItems: 'center',
        alignSelf:'center',
        alignContent:'center',
        textAlign:'center',
        fontFamily:'Roboto',
        fontSize:20,
        padding:20,
        color:'grey',
        backgroundColor: 'white'
    },

});

export default Feedback;