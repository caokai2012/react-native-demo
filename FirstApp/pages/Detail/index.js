import React,{Component} from 'react'
import {View,Text,StyleSheet,ActivityIndicator,FlatList,ImageBackground,ToastAndroid,RefreshControl} from 'react-native'
class Detail extends Component{
    constructor( props ){
        super( props )
        //接收参数
        const { navigation } = this.props
        //通过getParamX方法来接收参数，第一个参数是要获取的参数名，第二个参数默认值 
        const id = navigation.getParam('id')
        this.state = {
            isLoading:false,id,page:1,data:[]
        }
        this.getData();
    }
    getData(){
        fetch("http://route.showapi.com/151-4?showapi_appid=101141&showapi_sign=db1d58025eb045ddac4b0fd0c67a38c3&typeId="+this.state.id+"&page="+this.state.page)
        .then((res)=>res.json())
        .then((resJson)=>{
            let arr = this.state.data.concat(resJson.showapi_res_body.pb.contentlist)
            this.setState({
                data:arr
            })
        })
    }
    
    static navigationOptions = ({navigation}) => {
        return {
            title:navigation.getParam('title'),
            //标题栏的样式
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            //标题栏的文字颜色
            headerTintColor: '#fff',
            //标题栏的文字样式
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
    _renderItem = ({item}) => (
        <View style={ styles.item }>
            <Text style={ styles.title }>{ item.title }</Text>
            <Text style={ styles.answer } onPress={ ()=>ToastAndroid.showWithGravity(item.answer,ToastAndroid.LONG,ToastAndroid.CENTER) }>查看谜底</Text>
        </View>
    )
    _keyExtractor = (item,index) => String(index)
    _ListHeader = (
        <View>
            <Text>谜语列表</Text>
        </View>
    )
    //上拉加载更多数据
    _loadMore = ()=>{
        let p = this.state.page
        p++
        this.setState({
            page:p
        })
        this.getData();
    }
    //下拉刷新请求第一页数据
    _onRefresh = ()=>{
        let p = 1
        this.setState({
            page:p
        })
        this.getData();
    }
    render(){
        //根据状态来显示不同的内容
        if(this.state.isLoading){
            return(
                <View style={ { flex:1,justifyContent:'center',alignItems:'center' } }>
                    <ActivityIndicator></ActivityIndicator>
                </View>
            )
        }
        return(
            <View style={ styles.main }>
                <ImageBackground 
                opacity={ 0.3 } 
                style={ { width:'100%',height:'100%'} } 
                source={ require('./../../images/tabbar/guessBg2.jpg') }>
                    <FlatList
                        data={ this.state.data }
                        renderItem={ this._renderItem }
                        keyExtractor={ this._keyExtractor }
                        ListHeaderComponent={ this._ListHeader }
                        onEndReached={ this._loadMore }
                        onEndReachedThreshold={ 0.1 }
                        refreshControl={
                            <RefreshControl refreshing={ false } onRefresh={ this._onRefresh }></RefreshControl>
                        }
                    ></FlatList>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        flex:1
    },
    item:{
        flex:1,
        height:80,
        width:375,
        borderColor:'#333',
        borderWidth:1,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row'
    },
    title:{
        width:200
    },
    answer:{
        width:80,
        height:40,
        lineHeight:40,
        borderRadius:15,
        backgroundColor:'orange',
        color:'#fff',
        textAlign:'center',
        
    }
})

export default Detail;
