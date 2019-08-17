import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
class About extends Component {
    render() {
        return (
            <View style={styles.about}>
                <Text>这是有关信息的页面</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({});
export default About;