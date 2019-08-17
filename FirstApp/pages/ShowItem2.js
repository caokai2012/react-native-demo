import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
class App extends Component {
    render() {
        return (
            <View style={s.showItem}>
                <View style={s.rowlist}>
                    <View style={[s.rowitem,s.rowitemright]}>
                        <View style={s.viewitem}>
                            <Text style={s.txt}>度假</Text>
                        </View>
                        <View style={s.viewitem}>
                             <Image source={require('./../images/homework_dujia.gif')}/>
                        </View>
                    </View>
                    <View  style={[s.rowitem,s.rowitemright]}>
                        <View style={[s.viewitem,s.borderBom]}>
                            <Text style={s.txt}>景点.门票</Text>
                        </View>
                        <View style={s.viewitem}>
                            <Text style={s.txt}>自由行</Text>
                        </View>
                    </View>
                    <View  style={s.rowitem}>
                        <View style={[s.viewitem,s.borderBom]}>
                            <Text style={s.txt}>旅游团购</Text>
                        </View>
                        <View style={s.viewitem}>
                            <Text style={s.txt}>周边.短途</Text>
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
        backgroundColor: '#7cb832',
        flexDirection: 'row',
    },
    rowitem:{
        flex:1,
    },
    rowitemright:{
        borderRightWidth:1,
        borderRightColor:'#99c760',
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