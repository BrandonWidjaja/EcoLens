import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
if (process.env.EXPO_PUBLIC_MAPS_API_KEY) {
  console.log('EXPO_PUBLIC_MAPS_API_KEY loaded')
} else {
  console.error('MAPS API NOT LOADED')
}

const Map = () => {
  const [region, setRegion] = useState({
    latitude: -37.810236,
    longitude: 144.9627652,
    latitudeDelta: 0.045, // Adjusted for a radius of 5000 meters
    longitudeDelta: 0.045 // Adjusted for a radius of 5000 meters
  })
  const [recyclingCenters, setRecyclingCenters] = useState([])

  useEffect(() => {
    fetchRecyclingCenters()
  }, [region])

  const fetchRecyclingCenters = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${region.latitude},${region.longitude}&radius=5000&keyword=recycling%20centre&type=recycling&key=${process.env.EXPO_PUBLIC_MAPS_API_KEY}`
      )
      const data = await response.json()
      if (data.results) {
        setRecyclingCenters(data.results)
      }
    } catch (error) {
      console.error('Error fetching recycling centers:', error)
    }
  }

  const handleSelectPlace = (place) => {
    setRegion({
      latitude: place.location.lat,
      longitude: place.location.lng,
      latitudeDelta: 0.045, // Adjusted for a radius of 5000 meters
      longitudeDelta: 0.045 // Adjusted for a radius of 5000 meters
    })
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
        zoomEnabled={false}
      >
        {/* Display markers for recycling centers */}
        {recyclingCenters.map((center, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: center.geometry.location.lat,
              longitude: center.geometry.location.lng
            }}
            title={center.name}
            description={center.vicinity}
          />
        ))}
      </MapView>
      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder="Enter your city to find recycling centres"
          onPress={(data, details = null) => {
            if (details) {
              handleSelectPlace(details.geometry)
            }
          }}
          query={{
            key: process.env.EXPO_PUBLIC_MAPS_API_KEY,
            language: 'en',
            types: 'establishment' // Restrict to establishments (businesses)
          }}
          fetchDetails={true}
          styles={{
            container: {
              flex: 1
            },
            textInputContainer: {
              backgroundColor: 'rgba(0,0,0,0)',
              borderTopWidth: 0,
              borderBottomWidth: 0
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: '#5d5d5d',
              fontSize: 16
            },
            listView: {
              backgroundColor: 'white',
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#ccc',
              marginTop: 10
            }
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  searchContainer: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    marginHorizontal: 10 // Adjust margin as needed
  }
})

export default Map
