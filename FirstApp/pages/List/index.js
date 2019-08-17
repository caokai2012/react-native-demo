import React,{Component} from 'react'
import {StyleSheet,View,Text,FlatList,TouchableOpacity} from 'react-native'
export default class App extends Component{
    constructor( props ){
        super( props );
        this.state = {
            data:[]
        }
        this.getData()
    }
    //通过网络接口获取数据
    getData(){
        fetch("http://route.showapi.com/151-3?showapi_appid=101141&showapi_sign=db1d58025eb045ddac4b0fd0c67a38c3")
        .then((res)=>res.json())
        .then((resJson)=>{
            // console.warn(resJson.showapi_res_body.typeList);
            this.setState({
                data:resJson.showapi_res_body.typeList
            })
        })
    }
    static navigationOptions = {
        title:'谜语类型',
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
    _renderItem = ({item}) => (
        <View style={ styles.list }>
            <TouchableOpacity style={ styles.touch } onPress={ ()=>this.props.navigation.navigate('Detail',{id:item.id,title:item.name}) }>
                <Text style={ styles.text }>{ item.name }</Text>
            </TouchableOpacity>
        </View>
    )
    _keyExtractor = (item) => item.id
    _ListHeader = (
        <View>
            <Text>谜语类型</Text>
        </View>
    )
    render(){
        return(
            <View style={ styles.main }>
                <FlatList
                    data={ this.state.data }
                    renderItem={ this._renderItem }
                    keyExtractor={ this._keyExtractor }
                    ListHeaderComponent={ this._ListHeader }
                ></FlatList>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    list:{
        width:375,
        height:80,
        borderColor:'#eee',
        borderWidth:1,
        backgroundColor:'orange'
    },
    touch:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#fff',
        fontSize:20
    }
})