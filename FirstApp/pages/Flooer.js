import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
class App extends Component {
    render() {
        return (
            <View style={s.flooer}>
                <View style={s.list}>
                    <Text>Quanr 京ICP备08023580号</Text>
                    <Text style={s.txt}>意见反馈</Text>
                    <Text style={s.txt}>关于我们</Text>
                </View>
            </View>
        );
    }
}
const s  = StyleSheet.create({
    flooer:{
        height:60,
        backgroundColor:'#eee',
    },
    list:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
    },
    txt:{
        color:'#333333',
    }


});
export default App;