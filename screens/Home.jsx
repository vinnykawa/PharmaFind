import React, {useState} from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, FlatList, TextInput} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { MedItemView } from "../components/MedItems";
import { FAB } from 'react-native-paper';
import { DATA } from "../components/Data";
import filter from 'lodash.filter';




export default function Home ({ navigation }){
const [data, setData] = useState(DATA);
const [query, setQuery] = useState('');
const fullData = DATA ;

function renderHeader() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        borderRadius: 20,
        marginHorizontal:10
      }}
    >
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        value={query}
        onChangeText={queryText => handleSearch(queryText)}
        placeholder="Search"
        style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
      />
    </View>
  );
}

//filter data in flatlist
const handleSearch = text => {
  
  const formattedQuery = text.toLowerCase();

  
  const filteredData = filter(fullData, drug => {
    return contains(drug, formattedQuery);
  });
  setData(filteredData);
  setQuery(text);
};

const contains = ({ title, description}, query) => {
  

  if (title.includes(query) || description.includes(query) ) {
    return true;
  }
  return false;
};


const ErrorMessage = [
  {
    id: '0',
    title: 'No results found!',
    description: 'The product you searched for is currently unavailable. We are constantly working on adding more products on our platform.',
    image: require('../assets/no-results.jpg'),
    pharmacy: 'PharmaFind',
    amount:'150',
    distance:'14',
    latitude:'-1.286389',
    longitude:'36.817223',
  }];



  return (
    <View style={styles.center}>
      <SafeAreaView >
      <FlatList
        ListHeaderComponent={renderHeader}
        data={data.length===0? ErrorMessage: data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>{navigation.navigate('PharmacyList',{item})}}>
          <MedItemView item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
      <FAB
    style={styles.fab}
    extended
    label="submit prescription"
    icon="plus"
    onPress={() => navigation.navigate('Upload Prescription')}
  />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  fab: {
    position: 'absolute',
    margin: 10,
    right: 80,
    bottom: 0,
    tintColor:'#9AC4F8'
  },
});


