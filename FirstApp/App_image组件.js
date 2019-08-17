import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
// 引入自定义的组件
import Header from './pages/Header.js';
import List from './pages/List.js';
import Layout from './pages/Layout.js';

class App extends Component {
  render() {
    let data = [
      '喜榜|优就业全国学员人均月薪10915元，最高薪资21000元',
      '认证辅导 快速拿证 高新就业',
      '中公教育获国家教育部2018年第一批',
      '人工智能育后的秘密--Python学习沙龙约不约',
    ];
    let layoutArr = [
      "酒店",
      "海外酒店",
      "特价酒店",
      "团购",
      "名宿客栈",
    ];
    let url = `https://img4.duitang.com/uploads/item/201504/30/20150430214805_VjHrW.jpeg`;
    return (
      <View>
        <ScrollView>
          <Header></Header>
          <List data={data}></List>
          <Layout layout={layoutArr}></Layout>
          {/** 图片、背景组件的练习使用  */}
          <Image style={styles.img} source={require('./images/timg.jpg')} />

          <Image style={styles.image} source={{ uri: url }} />
          <ImageBackground style={styles.img3} source={require('./images/timg.gif')}>
            <Text>背景图片的测试</Text>
          </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}


// react-native的flex布局是不支持 Text标签的 
// Text组件的使用 Text 在没有设置宽高的时候，其宽高只是受到
// 文本内容的有关
const styles = StyleSheet.create({

  img: {
    width: 50,
    height: 50,
  },
  image: {
    width: 100,
    height: 100,
  },
  img3:{
    width: 100,
    height: 100,
  }

});
export default App;