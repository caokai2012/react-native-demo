
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,ScrollView,RefreshControl} from 'react-native';

import ShowItem from './pages/ShowItem.js';
import ShowItem1 from './pages/ShowItem1.js';
import ShowItem2 from './pages/ShowItem2.js';
import ShowItembom from './pages/ShowItembom.js';
import TypeList from './pages/TypeList.js';
import OptionBtn from './pages/OptionBtn.js';
import Foolter from './pages/Flooer.js';

class App extends Component {
  _onRefresh(){
    console.warn('下拉刷新触发事件...');
  }
  render() {
    return (
      <View style={s.container}>
        <ScrollView refreshControl={
          <RefreshControl 
            refreshing={false}
            colors= {['blue','green']}
            onRefresh={this._onRefresh}
          ></RefreshControl>

        }>
        <Image style={s.imgtit} resizeMode="cover" source={ require('./images/homework_tit.gif') } /> 
        <View style={s.ShowItem}>
          <ShowItem></ShowItem>
          <ShowItem1></ShowItem1>
          <ShowItem2></ShowItem2>
          <ShowItembom></ShowItembom>
        </View>
        <View style={s.typeList}>
          <TypeList></TypeList>
        </View>
        <View style={s.optionBtn}>
          <OptionBtn></OptionBtn>
        </View>
        <View style={s.flooter}>
          <Foolter></Foolter>
        </View>
        </ScrollView>
      </View>
    );
  }
}
const s = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  imgtit:{
    marginBottom:5,
    width:'100%',
    height:100,
  },
  ShowItem:{
    padding:5,
    borderBottomColor:"#eeeeee",
    borderBottomWidth:8,
  },
  typeList:{
    borderBottomColor:'#eeeeee',
    borderBottomWidth:10,
  },
  optionBtn:{
    borderBottomColor:'#eeeeee',
    borderBottomWidth:10,
  }



});
export default App;