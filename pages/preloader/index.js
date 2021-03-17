import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native';
import {Container} from './style';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { useEffect } from 'react';

export default () => {
    const navigation = useNavigation();
    useEffect(() => {
        
        const unsubscribe = navigation.addListener('focus', () => {
            setTimeout(function () {
                navigation.navigate('Home')
            }, 3000)
          });
      
    }) 

    return ( 
    <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} />
        <Image  style={styles.loading} source={require('../../assets/loading.gif')}/>
    </View>
)   

    }

const styles = StyleSheet.create({ 
    container: {
        display: 'flex',
        flexDirection: "column",
        backgroundColor: "#ffff",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    loading: {
        width: 100,
        height: 50
    }
})