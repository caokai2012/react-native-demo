import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
class App extends Component {
    render() {
        return (
            <View style={s.showItem}>
                <View style={s.rowlist}>
                    <View style={[s.rowitem,s.rowitemright]}>
                        <Text style={s.txt}>金融。理财</Text>
                    </View>
                    <View  style={[s.rowitem,s.rowitemright]}>
                        <Text style={s.txt}>保险.车险</Text>
                    </View>
                    <View  style={s.rowitem}>
                        <Text style={s.txt}>全球购</Text> 
                    </View>
                </View>
            </View>
        );
    }
}
 
const s = StyleSheet.create({
    showItem: {
        height: 50,
    },
    rowlist: {
        marginBottom:5,
        flex: 1,
        backgroundColor: '#ff9900',
        flexDirection: 'row',
    },
    rowitem:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
    },
    rowitemright:{
        borderRightWidth:1,
        borderRightColor:'#d4d4d4',
    },
    txt:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center',
    }
});
export default App;