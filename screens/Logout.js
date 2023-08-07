import React, {Component}from 'react';
import {Text,View,StyleSheet,TouchableOpacity}from 'react-native';

import firebase from firebase={}
export default class Logout extends component {
ComponentDidMount(){
firebase.auth().signout()
this.props.navigation.replace("login");
}
render(){
    return(
        <View style={Styles.container}>
            <Text>logout</Text>
        </View>
    )
}
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justyfycontent:"Center",
        alignitems:"center"

    }
})
   







