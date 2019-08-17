import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
class App extends Component {
  
    render() {
        let newList = [];
        for(let i in this.props.data){
            let text = (
                <Text style={styles.listitme}
                    key={i}
                    onPress={()=>{
                        alert(this.props.data[i]);
                    }}
                >
                    {this.props.data[i]}
                </Text>
            )
            newList.push(text);
        }
        return (
            //  开始编写列表内容的组件
            <View style={styles.list}>
            { /*
                <Text style={styles.listtit}>今日要闻</Text>
                <Text style={styles.listitme}>喜榜|优就业全国学员人均月薪10915元，最高薪资21000元</Text>

                <Text style={styles.listitme}>认证辅导 快速拿证 高新就业</Text>
                <Text style={styles.listitme}>中公教育获国家教育部2018年第一批</Text>
                <Text style={styles.listitme}>人工智能育后的秘密--Python学习沙龙约不约</Text>
            */}
            {newList}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    list: {
        marginTop: 20,
        marginLeft: 30,
        fontSize: 18,
    },
    listtit: {
        paddingBottom: 10,
        paddingTop: 5,
        color: 'red',
        fontWeight: 'bold',
        fontSize: 24,
    },
    listitme: {
        height: 40,
        marginBottom:10,
        // lineHeight: 40,
        // borderColor:'blue',
        // borderWidth:1,
    }



});
export default App;