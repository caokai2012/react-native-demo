import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image ,TouchableOpacity} from 'react-native';


class Home extends Component {
    // 设置静态的操作，用于简单的实
    static navigationOptions = {
        header: null
        // title: '首页',

    }
    render() {
        return (
            <View style={styles.main}>
                <Image style={styles.img} source={require('./../../images/tabbar/mi.jpg')}></Image>
                <TouchableOpacity style={styles.touch} onPress={() => this.props.navigation.navigate('List')}>
                    <Text style={styles.text}>猜一猜</Text>
                </TouchableOpacity>
                <Button
                    title="跳转到详情页面"
                    onPress={() => {
                        this.props.navigation.navigate('Detail', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        })
                    }}
                ></Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 200,
        height: 200
    },
    touch: {
        marginTop: 15,
        width: 200,
        height: 60,
        backgroundColor: 'skyblue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:30,
    },
    text: {
        color: '#fff',
        fontSize: 16
    }
});
export default Home;