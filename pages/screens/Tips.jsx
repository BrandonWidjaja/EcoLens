import React from 'react'
import { View, StyleSheet, Text, Platform, ScrollView} from 'react-native'
import { ListItem } from '@rneui/themed'

const Tips = () => {
  const [expanded1, setExpanded1] = React.useState(false);
  const [expanded2, setExpanded2] = React.useState(false);
  const [expanded3, setExpanded3] = React.useState(false);
  return (
    <ScrollView contentContainerStyle = {[styles.container, {flexDirection: 'column',},]}>
        <View style = {{flex: 2, maxWidth: '80%', justifyContent:'center', alignItems:'center'}}>
            <Text style = {styles.title}>General Recycling Tips</Text>
        </View>
        <View style = {{flex: 6, width: '80%'}}>
            <ListItem.Accordion
                containerStyle = {styles.accordion}
                content={
                <ListItem.Content>
                    <ListItem.Title style = {{fontSize:30, color:"black", fontWeight:"bold"}}>Food containers</ListItem.Title>
                </ListItem.Content>
                }   
                isExpanded={expanded1}
                onPress={() => {
                    setExpanded1(!expanded1);
                }}
            >
                <ListItem
                containerStyle = {{alignItems: 'center', borderRadius: 20, backgroundColor:'#FAF3E1'}}>
                    <ListItem.Content>
                        <ListItem.Subtitle style = {{paddingBottom:10}}>1. Wash out any food particles that are stuck on the container, this includes sauces, oils and fats.</ListItem.Subtitle>
                        <ListItem.Subtitle style = {{paddingBottom:10}}>2. Dispose of Food into Organic waste bins so that they can be repurposed into energy </ListItem.Subtitle>
                        <ListItem.Subtitle>3. Otherwise, Recycle the container following the usual recycling guidelines </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </ListItem.Accordion>
            <ListItem.Accordion
                containerStyle = {styles.accordion}
                content={
                <ListItem.Content>
                    <ListItem.Title style = {{fontSize:30, color:"black", fontWeight:"bold"}}></ListItem.Title>
                </ListItem.Content>
                }   
                isExpanded={expanded2}
                onPress={() => {
                    setExpanded2(!expanded2);
                }}
            >
                <ListItem
                containerStyle = {{alignItems: 'center', borderRadius: 20, backgroundColor:'#FAF3E1'}}>
                    <ListItem.Content>
                        <ListItem.Subtitle style = {{paddingBottom:10}}>1. Wash out any food particles that are stuck on the container, this includes sauces, oils and fats.</ListItem.Subtitle>
                        <ListItem.Subtitle style = {{paddingBottom:10}}>2. Dispose of Food into Organic waste bins so that they can be repurposed into energy </ListItem.Subtitle>
                        <ListItem.Subtitle>3. Otherwise, Recycle the container following the usual recycling guidelines </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </ListItem.Accordion>
            <ListItem.Accordion
                containerStyle = {{borderRadius: 20, backgroundColor:"white"}}
                content={
                <ListItem.Content>
                    <ListItem.Title style = {{fontSize:30, color:"black", fontWeight:"bold"}}>Food containers</ListItem.Title>
                </ListItem.Content>
                }   
                isExpanded={expanded3}
                onPress={() => {
                    setExpanded3(!expanded3);
                }}
            >
                <ListItem
                containerStyle = {{alignItems: 'center', borderRadius: 20, backgroundColor:'#FAF3E1'}}>
                    <ListItem.Content>
                        <ListItem.Subtitle style = {{paddingBottom:10}}>1. Before throwing out food containers, Wash out any food particles that are left o</ListItem.Subtitle>
                        <ListItem.Subtitle>1. Before throwing out food containers, Wash out any food </ListItem.Subtitle>
                        <ListItem.Subtitle>1. Before throwing out food containers, Wash out any food </ListItem.Subtitle>
                        <ListItem.Subtitle>1. Before throwing out food containers, Wash out any food </ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </ListItem.Accordion>
            
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontFamily: 'Arial',
        fontWeight: '500',
        alignItems: 'center',
        textAlign: 'center',
        color: "black",
        paddingTop:30
    },
    accordion: {
        flexGrow: 1,
        borderRadius: 20, 
        backgroundColor:"white",
    },
    round:{
        borderRadius: 50,
    },
    search: {
        borderRadius: 10000,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAF3E1',
        flexDirection: 'column',
    },
    logo: {
        aspectRatio:1,
        borderColor: 'green',
        borderWidth: 9,
        borderRadius: 100000,
    },
    desc: {
        paddingTop: 20,
        fontSize: 25,
        textAlign: 'center',
        paddingBottom: 20,
    },
    button: {
        paddingTop: 20,
        borderWidth:2,
        borderRadius: 50,
    }
})

export default Tips
