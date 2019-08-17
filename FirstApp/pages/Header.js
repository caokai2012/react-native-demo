import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
class App extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text style={ [styles.txtleft,styles.txt] }>中公</Text>
                <Text style={ [styles.txtcenter,styles.txt] }>优就业</Text>
                <Text style={ [styles.txtright,styles.txt] }>IT培训</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        padding:10,
        borderBottomColor:'#f00',
        borderBottomWidth:1,
        borderBottomColor:'#f00',
        flexDirection:'row',
        justifyContent:'center',
    },
    txt:{
        fontSize:30,
        fontWeight:"bold",
    },
    txtleft:{
        color:'#f00'
    },
    txtcenter:{
        backgroundColor:'#f00',
        color:'white',
    },
    txtright:{

    }

});
export default App;