import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
class App extends Component {
    render() {
        let list = [];
        return (
            <View style={s.typeList}>
                <View style={s.Item}>
                    <View style={s.rowListItem}>
                        <View style={s.box}>
                            <Image source={require('./../images/homework_btn1.gif')} />
                            <Text style={s.itemTxt}>签证.wifi</Text>
                        </View>
                    </View>
                    <View style={s.rowListItem}>
                        <View style={s.box}>
                            <Image source={require('./../images/homework_btn2.gif')} />
                            <Text style={s.itemTxt}>签证.wifi</Text>
                        </View>
                    </View>
                    <View style={s.rowListItem}>
                        <View style={s.box}>
                            <Image source={require('./../images/homework_btn3.jpg')} />
                            <Text style={s.itemTxt}>签证.wifi</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const s = StyleSheet.create({
    typeList: {
        height: 90,
        flex: 1,
    },
    Item: {
        width:'100%',
        flexDirection: 'row',
        flex: 1,
    },
    rowListItem: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',

    },
    box: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    itemTxt:{
        color:'#333333',
    }


});
export default App;