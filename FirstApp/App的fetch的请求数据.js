import React, { Component } from 'react';
import { View, 
        Text, 
        StyleSheet,
        FlatList,
        Image ,
        RefreshControl,
      } from 'react-native';


class App extends Component {
    // 数据的初始化
    constructor(props) {
      super();
      this.state = {
        data: [],
        page:0,
      }
      this.getData(this.state.page);
    }
    //请求网络的数据
    getData(page) {
      return fetch(`https://v1.itooi.cn/tencent/mv/hot?pageSize=8&page=${page}`, {})
        .then((res) => { return res.json() })
        .then(res => {
          let data = res.data.list
          data = data.concat(this.state.data);
          this.setState({
            data,
          });
        });
    }
    
  //  flatList 组件的使用
  // 渲染显示的组件：
  _renderItem = ({item}) => (
    <View style={s.itemList}>
    <View>
      <Image style={s.img} source={{uri:item.picurl}} />
    </View>
    <View style={s.topTitle}>
      <Text>{item.title}</Text>
    </View>
    </View>
  );  
  //key值的添加
  _keyExtractor = (item, index) =>  String(index);
 //头部设置
 _ListHeader = ()=>(
   <View>
    <Text>歌曲排行榜</Text>
   </View>
 )
// 底部加载的设置
_ListFooter = () => {
  return (
    <View><Text>没有更多的数据了...</Text></View>
  );
}
// 中间的分割线的操作
_ItemSepa = ()=>{
  return (
    <View style={s.sepa}></View>
  );
}
// 下拉刷新时触发的事件
_onRefresh = ()=>{
  let page = this.state.page;
  page++;
  this.getData(page);
  this.setState({
    page,
  });
}

  render() {
    return (
      <View style={s.flatList}>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ListHeaderComponent={this._ListHeader}
          ListFooterComponent={this._ListFooter}
          ItemSeparatorComponent={this._ItemSepa}
          refreshControl = {
            <RefreshControl
              colors= {['blue']}
              refreshing={false}
              onRefresh = {this._onRefresh}
            >
            </RefreshControl>
          }
        >
        
        
        </FlatList>
      </View>
    );
  }
}
const s = StyleSheet.create({
  itemList:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
  },  
  topTitle:{
    marginLeft:30,
  },
  img:{
    width:100,
    height:100,
  },
  sepa:{
    height:10,
    backgroundColor:'#f00',
  }

});
export default App;