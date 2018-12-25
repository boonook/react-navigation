
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,StatusBar,TouchableOpacity,Image,ImageBackground,TextInput,Dimensions} from 'react-native';
export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password:'',
            againPassword:''
        };
    }

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
                        <View style={{
                            backgroundColor:'#fff',
                            margin:10
                        }}>
                            <Text style={{textAlign:'center',margin:10}}>注册界面</Text>
                            <View style={{padding:10}}>
                                <TouchableOpacity>
                                    <TextInput
                                        placeholder={'用户名'}
                                        style={{height: 40, borderColor: 'gray'}}
                                        onChangeText={(userName) => this.setState({userName})}
                                        value={this.state.userName}
                                    ></TextInput>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <TextInput
                                        placeholder={'密码'}
                                        textContentType={'password'}
                                        style={{height: 40, borderColor: 'gray'}}
                                        onChangeText={(password) => this.setState({password})}
                                        value={this.state.password}
                                    ></TextInput>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <TextInput
                                        placeholder={'确认密码'}
                                        textContentType={'againPassword'}
                                        style={{height: 40, borderColor: 'gray'}}
                                        onChangeText={(againPassword) => this.setState({againPassword})}
                                        value={this.state.againPassword}
                                    ></TextInput>
                                </TouchableOpacity>
                                <View style={{marginTop:10,marginBottom:10}}>
                                    <Text style={{textAlign:'right',color:'#2296fe'}}><Text onPress={() => {navigation.navigate('ForgetPassword')}}>忘记密码?</Text>/<Text onPress={() => {navigation.navigate('Login')}}>登录</Text></Text>
                                </View>
                                <Button
                                    title='注册'
                                    onPress={()=>{
                                        navigation.navigate('Home');
                                    }}
                                />
                            </View>
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
