import React from 'react';
import {Alert} from 'react-native';
import Loading from './Loading';
import  Weather from './Weather';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = 'YOURE TOKEN On openweathermap';


export default class extends React.Component{

  state = {
    isLoading: true
  }

  //send to API 
  getWeather = async(latitude, longitude) =>{
    const {
      data:{
        main:{temp},
        weather
      }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    
    this.setState(
      {
        isLoading:false, 
        temp:temp, 
        condition: weather[0].main});
        
  }
  getLocation = async() =>{
    try{
      const response = await Location.requestPermissionsAsync();
      const {
        coords:{latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      
      this.getWeather(latitude, longitude);

    }catch(err){
      Alert.alert('Can\'t Find you.', 'so sad');
    }
  }
  componentDidMount(){
    this.getLocation();
  }

  render(){
    const {isLoading, temp, condition} = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  } 

}
