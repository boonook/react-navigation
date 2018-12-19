
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,StatusBar,TouchableOpacity,Image,ImageBackground,Dimensions} from 'react-native';
import MessageModal from "../../components/messageModal/MessageModal";
export default class LoginScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部
        }
    };
    render() {
        const {navigation} = this.props;
        const {height,width} =  Dimensions.get('window');
        return (
            <View>
                <ImageBackground source={require('../../assets/images/sunflower.jpg')} style={{width:width,height:height}}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'stretch',
                    }}>
                        <Button
                            title='点击跳转注册界面'
                            onPress={()=>{
                                navigation.navigate('Register');
                            }}
                        />
                        <Button
                            title='点击跳转忘记密码界面'
                            onPress={()=>{
                                navigation.navigate('ForgetPassword');
                            }}
                        />
                        <Button
                            title='点击登录'
                            onPress={()=>{
                                navigation.navigate('Home');
                            }}
                        />
                        <Button
                            title='展开'
                            onPress={() => {
                                this.refs.son.setModalVisible(true)
                            }}
                        />
                        <View>
                            <MessageModal ref="son"/>
                        </View>
                    </View>
                </ImageBackground>
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
