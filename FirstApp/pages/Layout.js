import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
class App extends Component {
    render() {
        let newList = [];
        for (let item of this.props.layout) {
            let newView = (
                <Text style={styles.layoutitem} key={item}>{item}</Text>
            );
            newList.push(newView);
        }
        return (
            <View style={styles.layout}>
                <View style={styles.layleft}>
                    <Text style={[styles.laytit, styles.item]}>{this.props.layout[0]}</Text>
                </View>
                <View style={styles.layright}>
                    <Text style={[styles.laylist, styles.item]}>
                        {this.props.layout[1]}
                    </Text>
                    <Text style={[styles.laylist, styles.item]}>
                        {this.props.layout[1]}
                    </Text>
                    <Text style={[styles.laylist, styles.item]}>
                        {this.props.layout[1]}
                    </Text>
                    <Text style={[styles.laylist, styles.item]}>
                        {this.props.layout[1]}
                    </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    layout: {
        height: 200,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    laytit: {
        flex:1,
        lineHeight: 200,
        textAlign: 'center',
    },
    layleft:{
        width: '30%',
        height: 200,
    },
    item: {
        fontSize: 22,
        color: '#fff',
        backgroundColor: 'rgb(254,95,127)',
    },
    layright:{
        width:'70%',
        backgroundColor: 'skyblue',
        flexDirection:'row',
        flexWrap:'wrap',
    },
    laylist:{
        width:'50%',
        height:100,
        borderColor: '#fff',
        borderWidth: 2,
        borderStyle: 'solid',
        textAlign:'center',
        lineHeight:100
    }
});
export default App;