import { StackNavigator ,TabNavigator,DrawerNavigator,SafeAreaView,DrawerItems} from 'react-navigation'
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image,ScrollView,Dimensions,TouchableOpacity,ImageBackground } from 'react-native';

import MessageScreen from "./screen/message/MessageScreen";
import FriendScreen from "./screen/friend/FriendScreen";
import WatchScreen from "./screen/watch/WatchScreen";
import ActiveScreen from "./screen/active/ActiveScreen";
import SettingScreen from "./components/setting/SettingScreen";
import LoginScreen from "./screen/login/LoginScreen";
import RegisterScreen from "./screen/register/RegisterScreen";
import ForgetPasswordScreen from "./screen/forgetPassword/ForgetPasswordScreen";
import FriendAdd from "./components/friendAdd/FriendAdd";
import MoneyScreen from "./components/money/MoneyScreen";
import AlbumScreen from "./components/album/AlbumScreen";
import Camera from "./components/camera/Camera";
const { height, width } = Dimensions.get("window");

const appTabNavigator = TabNavigator({
    Message: {
        screen: MessageScreen, // 对应组件
        navigationOptions: {
            tabBarLabel: '消息', // 底部显示的文字
            tabBarIcon: ({ tintColor }) => {
                // tintColor传递进来的是颜色，选中的颜色,那么图标颜色也要换
                return <Image source={require('./assets/images/book.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            }
        }
    },
    Friend: {
        screen:FriendScreen,
        navigationOptions: {
            tabBarLabel: '联系人',
            tabBarIcon: ({tintColor}) => {
                return <Image style={[styles.tabBarImage,{tintColor: tintColor}]} source={require('./assets/images/move.png')}/>
            },
        }
    },
    Watch: {
        screen:WatchScreen,
        navigationOptions: {
            tabBarLabel: '看点',
            tabBarIcon: ({tintColor}) => {
                return <Image style={[styles.tabBarImage,{tintColor: tintColor}]} source={require('./assets/images/message.png')}/>
            },
        }
    },
    Active: {
        screen:ActiveScreen,
        navigationOptions: {
            tabBarLabel: '动态',
            tabBarIcon: ({tintColor}) => {
                return <Image style={[styles.tabBarImage,{tintColor: tintColor}]} source={require('./assets/images/move.png')}/>
            },
        }
    },
},{
    animationEnabled: true, // 切换tab的时候是否要动画
    tabBarPosition: 'bottom', // 导航的位置
    swipeEnabled: false, // 是否可以手指滑动,默认是true
    backBehavior: 'none', // 是否后退按钮导致选项卡切换到初始选项卡？如果是，将initialroute，否则没有。默认initialroute行为
    lazy:true,// 是否在需要时临时渲染选项卡，而不是提前渲染它们。（即懒加载）
    tabBarOptions: { // 关于tab的样式
        activeTintColor: '#f00', // 选中的颜色
        inactiveTintColor: '#333', // 不选中的颜色
        showIcon: true, // 是否显示小图标
        indicatorStyle: {
            height: 0,
        },
        style: { // 可以设置tab的各种样式
            backgroundColor: '#fff', // 底部tab的背景颜色
            height:60, // 高度
            borderTopWidth:1,
            borderColor:'#ddd',
        },
        tabStyle: { // 设置底部图标的样式
            height: 55,
            marginTop:10,
        },
        labelStyle: { // 设置文字的样式
            fontSize: 12,
        },
        pressColor: 'gray', // 点击的时候光圈
        pressOpacity: 0.8, // 光圈的透明度
        upperCaseLabel: false, // 如果是英文的情况默认会转换为大写
    },});

const DrawerNav = DrawerNavigator({
    Home:{
        screen:appTabNavigator
    },
    Setting:{
        screen:SettingScreen,
        navigationOptions: {
            drawerLabel:'Setting',
            drawerIcon:({tintColor})=>(
                <Image name={'drafts'} size={24} source={require('./assets/images/book.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            )
        }
    },
    Money:{
        screen:MoneyScreen,
        navigationOptions: {
            drawerLabel:'Money',
            drawerIcon:({tintColor})=>(
                <Image name={'drafts'} size={24} source={require('./assets/images/book.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            )
        }
    },
    Album:{
        screen:AlbumScreen,
        navigationOptions: {
            drawerLabel:'Money',
            drawerIcon:({tintColor})=>(
                <Image name={'drafts'} size={24} source={require('./assets/images/book.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            )
        }
    }
},{
    initialRouteName: 'Home',
    drawerWidth:  200, // 展示的宽度
    drawerPosition: 'left', // 抽屉在左边还是右边
    contentComponent: props => (<CustomDrawerContentComponent {...props} />)
});
const CustomDrawerContentComponent = props => {
    return (
        <ScrollView style={{flex: 1,backgroundColor:'red'}}>
            <View
                style={{ backgroundColor: "white", height: height, width: width - 100 }}
            >
                <View style={{width:200,height:100,textAlign:'center',alignItems:'center',paddingTop:10}}>
                    <Image
                        style={{width: 66, height: 66, borderRadius: 33}}
                        source={require('./assets/images/sunflower.jpg')}
                    />
                    <Text style={{textAlign:"center"}}>boonook</Text>
                </View>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => props.navigation.closeDrawer()}
                >
                    <Text>首页</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => props.navigation.navigate("Money")}
                >
                    <Text>钱包</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => props.navigation.navigate("Album")}
                >
                    <Text>相册</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => props.navigation.navigate("Setting")}
                >
                    <Text>设置</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => props.navigation.navigate("Login")}
                >
                    <Text>退出登录</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const AppStackNavigator = StackNavigator({
    Login:{
        screen:LoginScreen
    },
    Register:{
        screen:RegisterScreen
    },
    ForgetPassword:{
        screen:ForgetPasswordScreen
    },
    DrawerNav:{
        screen:DrawerNav,
    },
    FriendAdd:{
        screen:FriendAdd
    },
    Camera:{
        screen:Camera
    }
},{
    navigationOptions:{
        header:null//隐藏导航栏全局的
    }
});

const styles = StyleSheet.create({
    tabBarImage: {
        width: 24,
        height: 24,
    },
    btnStyle: {
        height: 45,
        width: 200,
        justifyContent: "center",
        alignItems: "center",
        margin: 1,
        backgroundColor: "orange"
    },
});
export default AppStackNavigator;