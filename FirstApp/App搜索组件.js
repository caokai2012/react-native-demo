import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
class App extends Component {
  // 数据的初始化和赋值的操作：
  // 
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }



  render() {
    return (
      <View style={s.bg}>
        <ScrollView >
          <Button title='首页'  ></Button>
          <TouchableOpacity style={s.touch}>
            <Text>跳转页面的组合...</Text>
          </TouchableOpacity>

          <View style={[{ flexDirection: 'row' }, s.sreach]}>
            <TextInput style={s.input} ></TextInput>
            <Text style={s.txt}>搜索</Text>
          </View>
          <View style={s.sreachInp}>
          <Image style={s.img} source={ require('./images/group/sreach.png')  } />
            <TextInput style={s.touchTxt}></TextInput>
            <TouchableOpacity style={s.touchInp}>
              <Text style={s.inpTxt}>
                搜索
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const s = StyleSheet.create({
  bg: {
    backgroundColor: '#fff'
  },
  input: {
    width: '50%',
    borderColor: '#f00',
    borderWidth: 1,
  },
  sreach: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    width: 50,
    height: 50,
    color: 'green',
    borderColor: 'red',
    borderWidth: 1,
    lineHeight: 50,
    textAlign: 'center',
  },
  sreachInp: {
    padding: 5,
    height: 50,
    borderColor: 'skyblue',
    borderWidth: 1,
    position:'relative',
  },
  img:{
    position:'absolute',
    left:15,
    top:16,
    width:16,
    height:16,
  },
  touchInp: {
    position:'absolute',
    right:23,
    top:5,
  },
  touchTxt: {
    width: '80%',
    height: 40,
    borderColor: '#f00',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft:30,
  },
  inpTxt:{
    width:50,
    height:40,
    textAlign:'center',
    lineHeight:40,
    backgroundColor:'#eee'
  }


});

export default App;