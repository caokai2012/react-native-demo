import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,AsyncStorage} from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator} from 'react-navigation'
// 引入缓存的组件
import Storage from 'react-native-storage';


//  引入组件
import Home from './pages/Home/index.js';
import Detail from './pages/Detail/index.js';
import List from './pages/List/index.js';
import Setting from './pages/Setting/index.js'
import About from './pages/About/index.js';

 
const stackNavigator = createStackNavigator({
  Home:{
    screen:Home
  },
  Detail,
  List,
},{
  initialRouteName:'Home'
});

const tabNavigator = createBottomTabNavigator({
    Home:{
      screen:stackNavigator,
      navigationOptions:{
        tabBarLabel:'首页'
      }
    },
    About:{
      screen:About,
      navigationOptions:{
        tabBarLabel:'关于'
      }
    },
    Setting:{
      screen:Setting,
      navigationOptions:{
        tabBarLabel:'设置'
      }
    }
},{
  initialRouteName:'Home',

  defaultNavigationOptions:({navigation}) =>({
     tabBarVisible:true,
    //  添加底部的图标
    tabBarIcon:({focused}) =>{
      let { routeName  } = navigation.state;

      if(routeName == 'Home'){
        if(focused){
          return (
            <Image 
            style={ { width:30,height:30} }
            source={require('./images/tabbar/selhome.png')}></Image>
          );
        }else{
          return (
            <Image 
            style={ { width:30,height:30} }
            source={require('./images/tabbar/home.png')}></Image>
          );
        }
      }else if(routeName == 'About'){
        if(focused){
          return (
            <Image 
            style={ { width:30,height:30} }
            source={require('./images/tabbar/selabout.png')}></Image>
          );
        }else{
          return (
            <Image 
            style={ { width:30,height:30} }
            source={require('./images/tabbar/about.png')}></Image>
          );
        }
      }else if(routeName == 'Setting'){
        if(focused){
          return (
            <Image 
            style={ { width:30,height:30} }
            source={require('./images/tabbar/selset.png')}></Image>
          );
        }else{
          return (
            <Image 
            style={ { width:30,height:30} }
            source={require('./images/tabbar/set.png')}></Image>
          );
        }
      }
    }
  }),
  
  // 
  tabBarOptions:{
    showIcon:true,
    activeTintColor:'#f00',
    inactiveTintColor:"#000",
    showIcon:true,
    labelStyle:{
      fontSize:18,
    },
    style:{
      backgroundColor:'#fff',
      height:70,
      borderTopColor:'#000',
      borderTopWidth:10
    }
  }

});

export default createAppContainer(tabNavigator);
