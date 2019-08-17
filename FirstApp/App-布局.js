/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format ck 
 * @flow ck
 */


 import React,{Component} from 'react';

 import {View,Text,StyleSheet} from 'react-native';

 // <View style={ styles.box }>
      //    <View style={ [styles.boxitem,styles.box1] } ></View>
      //    <View style={ [styles.boxitem,styles.box2] }></View>
      // </View>

 class App extends Component{
  render() {
    return (
      // 有且只有一个根节点
      <View style= { styles.itemStyle } >
        <View style={styles.item1}></View>
        <View  style={styles.item2}></View>
      </View>
    );
  }

 }
 
// 导出组件的方法：
/** 
 * 1、定义类文件时，export default class 类名
 * 2、类文件定义好，将通过 export default 类名
 * 3、类文件定义好，再通过module.exports = 类名
 *  
 * export default App;
 * moudle.exports = App 
 * 
 */

//  定义样式
/** 
 * 定义样式的注意事项：
 * 1、不用写像素单位
 * 2、属性名采用的小驼峰法命名
 * 
 * 
 */
//  react-native 里面默认的就是 flex布局
// 如果根节点的样式 flex：1 => 就是默认的全屏

 const styles = StyleSheet.create({
  box:{
   backgroundColor:'yellow',
   flex:1,
   flexDirection:'row',
   justifyContent:'center',
   alignItems:'center'
  },
  boxitem:{
    width:100,
    height:100,
  },
  box1:{
    backgroundColor:'red'
  },
  box2:{
    backgroundColor:'green'
  },
  // eg2:
  itemStyle:{
    backgroundColor:'skyblue',
    flex:1,
    padding:30
  },
  item1:{
    backgroundColor:'red',
    flex:1,
  },
  item2:{
    backgroundColor:'green',
    flex:2,
  }




 });

 export default App;