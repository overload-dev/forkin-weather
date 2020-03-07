import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import PropTypes from 'prop-types'

const weatherOptions ={
    Thunderstorm:{
        iconName:'weather-lightning',
        gradient:['#373B44','#4286F4'],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    Drizzle:{
        iconName:'weather-hail',
        gradient:['#89F7FE','#66A6FF'],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain:{
        iconName:'weather-rainy',
        gradient:['#00C6FB','#005BEA'],
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    Snow:{
        iconName:'weather-snowy',
        gradient:['#7DE2FC','#B9B6E5'],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? ...No."
    },
    Atmosphere:{
        iconName:'weather-hail',
        gradient:['#89E7FE','#66A6FF'],
        title:'Atmosphere',
        subtitle:'What a gloomy day'
    },
    Clear:{
        iconName:'weather-sunny',
        gradient:['#FF7300','#FEF253'],
        title: "Sunny",
        subtitle: "Just Cleary :)"
    },
    Mist:{
        iconName:'weather-hail',
        gradient:['#4DA0B0', '#D39D38'],
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
    },
    Dust:{
        iconName:'weather-hail',
        gradient:['#4DA0B0', '#D39D38'],
        title: "Dusty",
    subtitle: "Just don\'t outside."
    },
    Clouds:{
        iconName:'weather-cloudy',
        gradient:['#D7D2CC','#304352'],
        title: "Clouds",
        subtitle: "I know, boring"
    },
    Haze:{
        iconName:'weather-hail',
        gradient:['#4DA0B0', '#D39D38'],
        title:'Haze',
        subtitle:'Just don\'t outside.'
    },
}

export default function Weather({temp, condition}){
    return(
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={95} name={weatherOptions[condition].iconName} color="white"/>
                <Text style={styles.temp} >{temp}&#176;</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>
    );
}

Weather.prototype = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([ 'Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Mist', 'Dust', 'Clouds', 'Haze']).isRequired
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent: "center",
        alignItems:"center"
    },
    temp:{
        fontSize:35,
        color:"white"
    },
    halfContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    title:{
        color:'white',
        fontSize:45,
        fontWeight:'300',
        marginBottom:10
    },
    subtitle:{
        color:'white',
        fontWeight:'600',
        fontSize:25
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start"
    }
});