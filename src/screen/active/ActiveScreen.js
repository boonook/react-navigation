
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput,StatusBar,TouchableOpacity,Image} from 'react-native';

type Props = {};
export default class ActiveScreen extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View>
                <StatusBar backgroundColor="#0187FB" barStyle="light-content" />
                <View style={styles.header}>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{alignSelf:'flex-start',marginLeft:10}}>
                            <Image source={require('../../assets/images/logo.png')} style={styles.avatar} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.title}>动态</Text>
                    </View>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() => console.log(1231231)} style={{alignSelf:'flex-end',marginRight:10}}>
                            <Text style={styles.add}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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

const theme = require("../../components/theme/Theme");
debugger
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
    header: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: theme.default.tabTopBackgroundColor,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    flex1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    title: {
        fontSize: 20,
        color: '#fff'
    },
    add: {
        fontSize: 30,
        color: '#fff',
    }
});
