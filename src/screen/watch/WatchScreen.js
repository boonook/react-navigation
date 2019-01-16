import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,StatusBar,TouchableOpacity,Image} from 'react-native';
import HttpUtils from '../../api/HttpUtils';//把封装好的组件导入

type Props = {};
export default class WatchScreen extends Component {
    componentDidMount() {
        this.fetchData();
    };
    static navigationOptions = {
        header:null
    };
    fetchData() {
        let url = 'https://api.douban.com/v2/music/search';
        let data ={
            q:'李志',
            p:'李志222'
        };
        HttpUtils.get(url,data).then(res=>{
            debugger
        }).catch(err=>{
            debugger
        })
    }
    render() {
        const {navigation} = this.props;
        return (
            <View>
                <StatusBar backgroundColor="#0187FB" barStyle="light-content" />
                <View style={styles.header}>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() =>  navigation.openDrawer()} style={{alignSelf:'flex-start',marginLeft:10}}>
                            <Image source={require('../../assets/images/logo.png')} style={styles.avatar} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.title}>看点</Text>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#0187FB',
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
