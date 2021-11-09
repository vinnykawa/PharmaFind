import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";


const fetchNearestPlacesFromGoogle = () => {

  const latitude = 25.0756; // you can update it with user's latitude & Longitude
  const longitude = 55.1454;
  let radMetter = 2 * 1000; // Search withing 2 KM radius

  const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + latitude + ',' + longitude + '&radius=' + radMetter + '&key=' + 'AIzaSyA6eNQi6XxZYRVvkr_2oN1qZnUXXiLXl-s'; 

  fetch(url)
    .then(res => {
      return res.json()
    })
    .then(res => {

    var places = [] // This Array WIll contain locations received from google
      for(let googlePlace of res.results) {
        var place = {}
        var lat = googlePlace.geometry.location.lat;
        var lng = googlePlace.geometry.location.lng;
        var coordinate = {
          latitude: lat,
          longitude: lng,
        }

        var gallery = []

        if (googlePlace.photos) {
         for(let photo of googlePlace.photos) {
           var photoUrl = Urls.GooglePicBaseUrl + photo.photo_reference;
           gallery.push(photoUrl);
        }
      }

        place['placeTypes'] = googlePlace.types
        place['coordinate'] = coordinate
        place['placeId'] = googlePlace.place_id
        place['placeName'] = googlePlace.name
        place['gallery'] = gallery

        places.push(place);
      }

      // Do your work here with places Array
    })
    .catch(error => {
      console.log(error);
    });
  
}


const Maps = () => {
  return (
    <View style={styles.container}>
    <MapView style={styles.map}
    provider={PROVIDER_GOOGLE}
    mapType='standard'
    initialRegion={{
    latitude: -1.286389,
    longitude: 36.817223,
    latitudeDelta: 1.3006,
    longitudeDelta: 36.8117}}

    zoomEnabled={true}
    pitchEnabled={true}
    showsUserLocation={true}
    followsUserLocation={true} />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Maps;
