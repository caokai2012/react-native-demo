import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
class App extends Component {
    render() {
        return (
            <View style={s.showItem}>
                <View style={s.rowlist}>
                    <View style={[s.rowitem,s.rowitemright]}>
                        <View style={s.viewitem}>
                            <Text style={s.txt}>机票</Text>
                        </View>
                        <View style={s.viewitem}>
                             <Image source={require('./../images/homework_jipiao.gif')}/>
                        </View>
                    </View>
                    <View  style={[s.rowitem,s.rowitemright]}>
                        <View style={[s.viewitem,s.borderBom]}>
                            <Text style={s.txt}>特价机票</Text>
                        </View>
                        <View style={s.viewitem}>
                            <Text style={s.txt}>火车票</Text>
                        </View>
                    </View>
                    <View  style={s.rowitem}>
                        <View style={[s.viewitem,s.borderBom]}>
                            <Text style={s.txt}>汽车票.船票</Text>
                        </View>
                        <View style={s.viewitem}>
                            <Text style={s.txt}>专车.自驾</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
 
const s = StyleSheet.create({
    showItem: {
        height: 100,
    },
    rowlist: {
        marginBottom:5,
        flex: 1,
        backgroundColor: '#00a7f7',
        flexDirection: 'row',
    },
    rowitem:{
        flex:1,
    },
    rowitemright:{
        borderRightWidth:1,
        borderRightColor:'#3abaf8',
    },
    viewitem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    borderBom:{
        borderBottomColor:'#d4d4d4',
        borderBottomWidth:1
    },
    txt:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18
        
    }


});
export default App;