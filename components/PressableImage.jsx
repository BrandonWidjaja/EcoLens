import React, { useEffect } from 'react'
import { StyleSheet, Image, TouchableOpacity, Animated } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'
const PressableImage = ({ onPress }) => {
  const scaleAnim = new Animated.Value(1)

  useEffect(() => {
    const pulseAnim = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.06,
          duration: 700,
          useNativeDriver: true
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true
        })
      ])
    )

    pulseAnim.start()

    return () => {
      pulseAnim.stop()
    }
  }, [])

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Image
          resizeMode="cover"
          style={styles.logo}
          source={require('../assets/logo.jpg')}
        />
      </Animated.View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  logo: {
    aspectRatio: 1,
    height: responsiveHeight(30),
    borderColor: 'green',
    borderWidth: 9,
    borderRadius: 100000
  }
})
export default PressableImage
