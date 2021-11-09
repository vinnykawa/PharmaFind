import React from "react";
import { Text, Image, View, StyleSheet, FlatList, SafeAreaView, Linking} from "react-native";
import { Button } from "react-native-paper";
import { DATA } from "../components/Data";



const label = "Pharmacies";





const List = ({item}) =>{
    const url = Platform.select({
        ios: "maps:" + item.latitude + "," + item.longitude + "?q=" + label,
        android: "geo:" + item.latitude + "," + item.longitude + "?q=" + label
      });
    return(
        <View style={styles.listCardView}>
            <View style={{flexDirection:'column'}}>
                <Text style={{fontWeight:'bold',fontSize:15}}>{item.pharmacy}</Text>
                <Text style={{color:'red'}}>Ksh {item.amount}</Text>

            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{padding:10, color:'blue'}}> {item.distance} km</Text>
                <Button icon="map-marker" mode="text" color="green" onPress={() => {Linking.openURL(url);}} style={{padding:2}}>
                    locate
                </Button>

            </View>
        </View>
    );
}
    

 const PharmacyList = (item) =>{
    return(
        <View style={styles.container}>
            <View style={styles.mainCardView}>
            <Image 
            source={item.image}
            style={{
              width: '100%',
              height: '50%',
              margin: 10,
              resizeMode: "stretch",
            }} />
            
            </View>
            <Text style={
                {fontWeight:'800',
                fontSize:20,
                padding:10,
                }}
                >Pharmacies near you</Text>

            <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={List}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },

    mainCardView: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 5,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        paddingLeft: 14,
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
        height:'30%'
      },

      listCardView: {
        alignItems: "center",
        
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 5,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        paddingLeft: 14,
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
        width:'86%'
      },

      subCardView: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: "white",
        borderColor: "grey",
        borderWidth: 1,
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "center",
      },
});

export default PharmacyList;