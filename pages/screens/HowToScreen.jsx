import { useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import { Card, Text } from '@rneui/themed'
import { Image } from 'react-native'
import { styles } from '../../styles'
const shortText =
  'In the heart of a bustling city, amidst the rhythmic pulse of life, stories unfold like petals unfurling in the morning sun. Each step on the pavement echoes with whispered tales of triumph, love, and resilience. In the labyrinth of streets, dreams intertwine with reality, painting the urban landscape with hues of ambition and passion. Here, amidst the cacophony of voices and the symphony of honking horns, life dances to its own unique melody, a testament to the infinite possibilities that reside within the beating heart of a metrasdfjagaogpjkopolis.'

const HowTo = () => {
  return (
    <>
      <ScrollView style={styles.background}>
        <View style={styles.cardContainer}>
          <Card containerStyle={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require('../../assets/Common-wombat.webp')}
                resizeMode="cover"
              />
            </View>
          </Card>
        </View>
        <View style={styles.resultBox}>
          <Text style={styles.smallText}>{shortText}</Text>
        </View>
      </ScrollView>
    </>
  )
}
export default HowTo
