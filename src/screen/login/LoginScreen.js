
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,StatusBar,TouchableOpacity,Image,ImageBackground,Dimensions,TextInput,AsyncStorage} from 'react-native';
import {observer,inject} from 'mobx-react';
import MessageModal from "../../components/messageModal/MessageModal";
import HttpUtils from '../../api/HttpUtils';//把封装好的组件导入
@inject('homeStore') @observer
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password:'',
            result:''
        };
    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部
        }
    };

    //get数据
    onLoad=(url)=>{
        HttpUtils.get(url)//调用自定义组件方法，返回一个Promise
            .then(result=>{//then函数会返回一个新的promise
                this.setState({
                    result:JSON.stringify(result),//序列化：转换为一个 (字符串)JSON字符串
                });
            })
            .catch(error=> {
                this.setState({
                    result: JSON.stringify(error),//把错误信息格式化为字符串
                })
            })
    };

    setAsyncStorage=async() =>{
        try {
            await AsyncStorage.setItem('TASKS', 'I like to save it.');
        } catch (error) {
            // Error saving data
        }
    };

    getAsyncStorage=async()=>{
        try {
            const value = await AsyncStorage.getItem('TASKS');
            if (value !== null) {
                // We have data!!
                alert(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    };
    clearAsyncStorage=async()=>{
        try {
            AsyncStorage.removeItem(
                'TASKS',
                (error)=>{
                    if(!error){
                        alert('移除成功');
                    }
                }
            )
        }catch (error){
            alert('失败',+error);
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
                           <Text style={{textAlign:'center',margin:10}}>登陆界面</Text>
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
                               <View style={{marginTop:10,marginBottom:10}}>
                                     <Text style={{textAlign:'right',color:'#2296fe'}}><Text onPress={() => {navigation.navigate('ForgetPassword')}}>忘记密码？</Text>/<Text onPress={() => {navigation.navigate('Register')}}>注册</Text></Text>
                               </View>
                               <Button
                                   title='点击登录'
                                   onPress={()=>{
                                       navigation.navigate('Home');
                                   }}
                               />
                               <Button
                                   title='点击获取数据'
                                   onPress={()=>this.onLoad('http://api.douban.com/v2/movie/top250')}
                               />
                               <View style={{marginTop:16}}>
                                   <Button
                                       title='设置AsyncStorage'
                                       onPress={()=>this.setAsyncStorage()}
                                   />
                                   <Button
                                       title='获取AsyncStorage'
                                       onPress={()=>this.getAsyncStorage()}
                                   />
                                   <Button
                                       title='清除AsyncStorage'
                                       onPress={()=>this.clearAsyncStorage()}
                                   />
                               </View>
                           </View>
                           {/*<Button*/}
                               {/*title='展开'*/}
                               {/*onPress={() => {*/}
                                   {/*this.refs.son.setModalVisible(true)*/}
                               {/*}}*/}
                           {/*/>*/}
                       </View>
                        <View>
                            <Text>状态管理器</Text>
                            <Text>{this.props.homeStore.name}</Text>
                            <Text>{this.props.homeStore.msg}</Text>
                            <MessageModal ref="son"/>
                            <Text>返回结果：{this.state.result}</Text>
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
