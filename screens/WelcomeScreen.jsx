import React, {useState} from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import { TextInput,Button } from "react-native-paper";

const WelcomeScreen = ({navigation}) => {
    
    return(
        <View style={styles.container}>
            <Image
            source={require("../assets/icon.png")}
            style={{
              width: '100%',
              height: '50%',
              margin: 10,
              resizeMode: "stretch",
            }}
          /> 
            <Text style={styles.inputstyle}>Please choose a category</Text>
            <View style={{flex:2, flexDirection:'row', justifyContent:'space-around'}}>
            <Button color='#9AC4F8' mode="contained" style={{marginBottom:170,marginHorizontal:20}} onPress={() => navigation.navigate('Register')} > Pharmacist</Button>
            <Button color='#9AC4F8' mode="contained" style={{marginBottom:170,marginHorizontal:20}} onPress={() => navigation.navigate('Home')} > User</Button>
            </View>

           
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:3,
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

export default WelcomeScreen;