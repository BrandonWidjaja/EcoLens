import React from 'react'
import { Icon } from '@rneui/themed'
import { View, StyleSheet, Text, Platform, ScrollView } from 'react-native'
import { ListItem } from '@rneui/themed'

const Tips = () => {
  const [expanded1, setExpanded1] = React.useState(false)
  const [expanded2, setExpanded2] = React.useState(false)
  const [expanded3, setExpanded3] = React.useState(false)
  const [expanded4, setExpanded4] = React.useState(false)
  return (
    <ScrollView
      contentContainerStyle={[styles.container, { flexDirection: 'column' }]}
    >
      <View
        style={{
          flex: 2,
          maxWidth: '80%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={styles.title}>General Recycling Tips</Text>
      </View>
      <View style={{ flex: 6, width: '80%' }}>
        <ListItem.Accordion
          containerStyle={styles.accordion}
          content={
            <ListItem.Content>
              <ListItem.Title
                style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}
              >
                Food
              </ListItem.Title>
            </ListItem.Content>
          }
          isExpanded={expanded1}
          onPress={() => {
            setExpanded1(!expanded1)
          }}
        >
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ alignItems: 'center', width: '90%' }}>
              <Icon
                key={1}
                name={'looks-one'}
                style={{ paddingTop: 10 }}
                color={'green'}
              ></Icon>
              <Text style={styles.tip}>
                Remove all food particles, oil, fats and sauces from your
                container before disposing
              </Text>
            </View>
            <View style={{ alignItems: 'center', width: '90%' }}>
              <Icon
                key={2}
                name={'looks-two'}
                style={{ paddingTop: 10 }}
                color={'green'}
              ></Icon>
              <Text style={[styles.tip, { paddingBottom: 10 }]}>
                Dispose of Food into Organic waste bins so that they can be
                repurposed
              </Text>
            </View>
          </View>
        </ListItem.Accordion>
        <ListItem.Accordion
          containerStyle={styles.accordion}
          content={
            <ListItem.Content>
              <ListItem.Title
                style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}
              >
                Products
              </ListItem.Title>
            </ListItem.Content>
          }
          isExpanded={expanded2}
          onPress={() => {
            setExpanded2(!expanded2)
          }}
        >
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ alignItems: 'center', width: '90%' }}>
              <Icon
                key={1}
                name={'looks-one'}
                style={{ paddingTop: 10 }}
                color={'green'}
              ></Icon>
              <Text style={styles.tip}>
                Make sure to recycle only the recyclable parts of a product
              </Text>
            </View>
            <View style={{ alignItems: 'center', width: '90%' }}>
              <Icon
                key={2}
                name={'looks-two'}
                style={{ paddingTop: 10 }}
                color={'green'}
              ></Icon>
              <Text style={[styles.tip, { paddingBottom: 10 }]}>
                Most products tell you how to recycle the independent pieces of
                the product, just look for the Recycle Icon
              </Text>
            </View>
          </View>
        </ListItem.Accordion>
        <ListItem.Accordion
          containerStyle={styles.accordion}
          content={
            <ListItem.Content>
              <ListItem.Title
                style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}
              >
                Large Objects
              </ListItem.Title>
            </ListItem.Content>
          }
          isExpanded={expanded3}
          onPress={() => {
            setExpanded3(!expanded3)
          }}
        >
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ alignItems: 'center', width: '90%' }}>
              <Icon
                key={1}
                name={'looks-one'}
                style={{ paddingTop: 10 }}
                color={'green'}
              ></Icon>
              <Text style={styles.tip}>
                Flatten your large cardboard boxes and plastics to save space in
                your recycling boxes
              </Text>
            </View>
            <View style={{ alignItems: 'center', width: '90%' }}>
              <Icon
                key={2}
                name={'looks-two'}
                style={{ paddingTop: 10 }}
                color={'green'}
              ></Icon>
              <Text style={styles.tip}>
                If too large or unflattenable, such as furniture, arrange a
                pickup from a recycling center that handles recycling
              </Text>
            </View>
            <View style={{ alignItems: 'center', width: '90%' }}>
              <Icon
                key={3}
                name={'looks-3'}
                style={{ paddingTop: 10 }}
                color={'green'}
              ></Icon>
              <Text style={styles.tip}>
                Handle large objects carefully and wear protective gear if
                necessary
              </Text>
            </View>
            <View style={{ alignItems: 'center', width: '90%' }}>
              <Icon
                key={3}
                name={'looks-4'}
                style={{ paddingTop: 10 }}
                color={'green'}
              ></Icon>
              <Text style={[styles.tip, { paddingBottom: 10 }]}>
                Consider repurposing the objects or selling them if not needed
              </Text>
            </View>
          </View>
        </ListItem.Accordion>
        <ListItem.Accordion
          containerStyle={styles.accordion}
          content={
            <ListItem.Content>
              <ListItem.Title
                style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}
              >
                Community
              </ListItem.Title>
            </ListItem.Content>
          }
          isExpanded={expanded4}
          onPress={() => {
            setExpanded4(!expanded4)
          }}
        >
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ alignItems: 'center', width: '90%' }}>
              <Icon
                key={1}
                name={'looks-one'}
                style={{ paddingTop: 10 }}
                color={'green'}
              ></Icon>
              <Text style={styles.tip}>
                Spread awareness to your community about recycling, get them to
                think about their recycling habits
              </Text>
            </View>
            <View style={{ alignItems: 'center', width: '90%' }}>
              <Icon
                key={2}
                name={'looks-two'}
                style={{ paddingTop: 10 }}
                color={'green'}
              ></Icon>
              <Text style={[styles.tip, { paddingBottom: 10 }]}>
                Buy recyclable products, try to limit your use of soft plastics
                and reuse old containers.
              </Text>
            </View>
          </View>
        </ListItem.Accordion>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    // fontFamily: "Arial",
    fontWeight: '500',
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
    paddingTop: 30
  },
  accordion: {
    borderRadius: 20,
    backgroundColor: 'white'
  },
  tip: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 10
  },
  round: {
    borderRadius: 50
  },
  search: {
    borderRadius: 10000,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF3E1',
    flexDirection: 'column'
  },
  logo: {
    aspectRatio: 1,
    borderColor: 'green',
    borderWidth: 9,
    borderRadius: 100000
  },
  desc: {
    paddingTop: 20,
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 20
  },
  button: {
    paddingTop: 20,
    borderWidth: 2,
    borderRadius: 50
  }
})

export default Tips
