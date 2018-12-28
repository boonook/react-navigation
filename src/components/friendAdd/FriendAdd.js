import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View,TouchableOpacity,Image,StyleSheet } from "react-native";

export default class FriendAdd extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <View style={{position:'absolute',left:0,top:-20, color:'#fff',marginLeft:10}}>
                        <Text style={{lineHeight:60,color:'#fff',fontSize:18}} onPress={()=>{
                            this.props.navigation.goBack();
                        }}>返回</Text>
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.title}>添加</Text>
                    </View>
                </View>
                <Text>添加好友</Text>
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
        color: '#fff',
        textAlign:'center'
    },
    return: {
        fontSize: 18,
        color: '#fff',
    }
});