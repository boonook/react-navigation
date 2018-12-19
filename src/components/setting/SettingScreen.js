
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput} from 'react-native';

type Props = {};
export default class SettingScreen extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>设置!</Text>
                <Button
                    title='Go Back'
                    onPress={()=>{
                        navigation.goBack()
                    }}
                />
                <Button
                    title='open Drawer'
                    onPress={()=>{
                        navigation.openDrawer();
                    }}
                />
                <Button
                    title='toggle Drawer'
                    onPress={()=>{
                        navigation.toggleDrawer();
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input:{
        height:50,
        width:600,
        borderWidth:1,
        marginTop:20,
        borderColor:'#ccc'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
