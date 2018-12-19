
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,StatusBar,TouchableOpacity,Image,ImageBackground} from 'react-native';
export default class ForgetPasswordScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部
        }
    };
    render() {
        const {navigation} = this.props;
        return (
            <View>
                <Text>
                    忘记密码页面
                </Text>
                <Button
                    title='点击跳转登录页面'
                    onPress={()=>{
                        navigation.navigate('Login');
                    }}
                />
                <Button
                    title='点击跳转注册页面'
                    onPress={()=>{
                        navigation.navigate('Register');
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
