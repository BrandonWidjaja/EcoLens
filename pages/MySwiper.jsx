import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import { Home, Info, Map } from './screens/index.js'
const MySwiper = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0)

  const handleIndexChanged = (index) => {
    // Update the current page index
    setCurrentPageIndex(index)
  }

  return (
    <Swiper
      loop={false}
      style={styles.wrapper}
      onIndexChanged={handleIndexChanged}
    >
      <View style={styles.slide}>{currentPageIndex === 0 && <Info />}</View>
      <View style={styles.slide}>{currentPageIndex === 1 && <Home />}</View>
      <View style={styles.slide}>{currentPageIndex === 2 && <Map />}</View>
    </Swiper>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default MySwiper
