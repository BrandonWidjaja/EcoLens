import { useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Card, Text } from '@rneui/themed'
import { Image } from 'react-native'
import Loading from '../../components/Loading'
import { styles } from '../../styles'
const shortText =
  'In the heart of a bustling city, amidst the rhythmic pulse of life, stories unfold like petals unfurling in the morning sun. Each step on the pavement echoes with whispered tales of triumph, love, and resilience. In the labyrinth of streets, dreams intertwine with reality, painting the urban landscape with hues of ambition and passion. Here, amidst the cacophony of voices and the symphony of honking horns, life dances to its own unique melody, a testament to the infinite possibilities that reside within the beating heart of a metrasdfjagaogpjkopolis.'
const uploadImage = async (uri) => {
  const formData = new FormData()
  formData.append('image', {
    uri,
    name: 'photo.jpg',
    type: 'image/jpeg'
  })

  try {
    const response = await fetch('http://192.168.0.92:3000/upload', {
      method: 'POST',
      body: formData,
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    const responseData = await response.json()
    console.log('Upload Response:', responseData)
    return responseData
  } catch (error) {
    console.error('Upload Error:', error)
    return 'BAD'
  }
}
const Results = ({ route, navigation }) => {
  const { capturedImage } = route.params
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  useEffect(() => {
    setIsLoading(true)
    const formData = new FormData()
    formData.append('image', {
      capturedImage,
      name: 'photo.jpg',
      type: 'image/jpeg'
    })

    uploadImage(capturedImage).then((data) => {
      setMessage(data.message)
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      <ScrollView style={styles.background}>
        <View style={styles.cardContainer}>
          <Card containerStyle={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: capturedImage }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </Card>
        </View>
        <View style={styles.resultBox}>
          {isLoading ? (
            <Loading></Loading>
          ) : (
            <Text style={styles.smallText}>{message}</Text>
          )}
        </View>
      </ScrollView>
    </>
  )
}
export default Results
