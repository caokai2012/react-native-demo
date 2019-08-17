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
                            <Image source={require('./../images/homework_list1.gif')} />
                        </View>
                        <View style={s.box}>
                            <Text style={s.itemTxt}>签证.wifi</Text>
                        </View>
                    </View>
                    <View style={s.rowListItem}>
                        <View style={s.box}>
                            <Image source={require('./../images/homework_list2.gif')} />
                        </View>
                        <View style={s.box}>
                            <Text style={s.itemTxt}>签证.wifi</Text>
                        </View>
                    </View>
                    <View style={s.rowListItem}>
                        <View style={s.box}>
                            <Image source={require('./../images/homework_list3.gif')} />
                        </View>
                        <View style={s.box}>
                            <Text style={s.itemTxt}>签证.wifi</Text>
                        </View>
                    </View>
                    <View style={s.rowListItem}>
                        <View style={s.box}>
                            <Image source={require('./../images/homework_list1.gif')} />
                        </View>
                        <View style={s.box}>
                            <Text style={s.itemTxt}>签证.wifi</Text>
                        </View>
                    </View>
                </View>
                {/* */}
                <View style={s.Item}>
                <View style={s.rowListItem}>
                    <View style={s.box}>
                        <Image source={require('./../images/homework_list1.gif')} />
                    </View>
                    <View style={s.box}>
                        <Text style={s.itemTxt}>签证.wifi</Text>
                    </View>
                </View>
                <View style={s.rowListItem}>
                    <View style={s.box}>
                        <Image source={require('./../images/homework_list1.gif')} />
                    </View>
                    <View style={s.box}>
                        <Text style={s.itemTxt}>签证.wifi</Text>
                    </View>
                </View>
                <View style={s.rowListItem}>
                    <View style={s.box}>
                        <Image source={require('./../images/homework_list1.gif')} />
                    </View>
                    <View style={s.box}>
                        <Text style={s.itemTxt}>签证.wifi</Text>
                    </View>
                </View>
                <View style={s.rowListItem}>
                    <View style={s.box}>
                        <Image source={require('./../images/homework_list1.gif')} />
                    </View>
                    <View style={s.box}>
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
        height: 150,
        flex: 1,
    },
    Item: {
        width:'100%',
        flexDirection: 'row',
        flex: 1,
    },
    rowListItem: {
        height: 70,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',

    },
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }


});
export default App;