import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
class App extends Component {
    render() {
        return (
            <View style={s.showItem}>
                <View style={s.rowlist}>
                    <View style={[s.rowitem,s.rowitemright]}>
                        <View style={s.viewitem}>
                            <Text style={s.txt}>酒店</Text>
                        </View>
                        <View style={s.viewitem}>
                             <Image source={require('./../images/homework_jiudain.gif')}/>
                        </View>
                    </View>
                    <View  style={[s.rowitem,s.rowitemright]}>
                        <View style={[s.viewitem,s.borderBom]}>
                            <Text style={s.txt}>特惠酒店</Text>
                        </View>
                        <View style={s.viewitem}>
                            <Text style={s.txt}>客栈</Text>
                        </View>
                    </View>
                    <View  style={s.rowitem}>
                        <View style={[s.viewitem,s.borderBom]}>
                            <Text style={s.txt}>海外酒店</Text>
                        </View>
                        <View style={s.viewitem}>
                            <Text style={s.txt}>名宿</Text>
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
        backgroundColor: '#ff5555',
        flexDirection: 'row',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    rowitem:{
        flex:1,
    },
    rowitemright:{
        borderRightWidth:1,
        borderRightColor:'#fe7b7b',
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