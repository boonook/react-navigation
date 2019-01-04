
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,StatusBar,TouchableOpacity,ScrollView,Dimensions,Image} from 'react-native';
type Props = {};
const { height, width } = Dimensions.get("window");
export default class MoneyScreen extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View>
                <StatusBar backgroundColor="#0187FB" barStyle="light-content" />
                <View style={styles.header}>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() =>{
                            this.props.navigation.goBack();
                        }} style={{alignSelf:'flex-start',marginLeft:10}}>
                            <Text style={styles.add}>返回</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex1}>
                                <Text style={styles.title}>QQ钱包</Text>
                    </View>
                    <View style={styles.flex1}>
                        <TouchableOpacity  style={{alignSelf:'flex-end',marginRight:10}}>
                            <Text style={styles.add}>设置</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={{marginTop:16,backgroundColor:'#fff'}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: width/4,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>话费.流量</Text>
                            </View>
                            <View style={{width: width/4, height: 50,alignItems:'center',marginTop:16,marginBottom:8}}>
                                 <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>充Q币</Text>
                            </View>
                            <View style={{width: width/4, height: 50,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>会员.钻</Text>
                            </View>
                            <View style={{width: width/4, height: 50,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>美团外卖</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: width/4,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>话费.流量</Text>
                            </View>
                            <View style={{width: width/4, height: 50,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>充Q币</Text>
                            </View>
                            <View style={{width: width/4, height: 50,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>会员.钻</Text>
                            </View>
                            <View style={{width: width/4, height: 50,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>美团外卖</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row',marginTop:16,backgroundColor:'#fff',flex: 1}}>
                        <View style={{width: width/2, height: 80,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                            <View style={{
                                width:width/4,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'stretch'
                            }}>
                                <Text style={{textAlign:'center'}}>钱包精选</Text>
                            </View>
                            <View style={{width:width/4}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width:'100%',height: 80}}/>
                            </View>
                        </View>
                        <View style={{width: width/2, height: 80,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                            <View style={{
                                width:width/4,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'stretch'
                            }}>
                                <Text style={{textAlign:'center'}}>积分商城</Text>
                            </View>
                            <View style={{width:width/4}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width:'100%',height: 80}}/>
                            </View>
                        </View>
                    </View>
                    <Text style={{padding:8}}>限时推广</Text>
                    <View style={{flexDirection: 'row',backgroundColor:'#fff'}}>
                        <View style={{width: width/4,alignItems:'center',marginTop:16,marginBottom:8}}>
                            <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                            <Text style={{textAlign:'center'}}>话费.流量</Text>
                        </View>
                        <View style={{width: width/4, height: 50,alignItems:'center',marginTop:16,marginBottom:8}}>
                            <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                            <Text style={{textAlign:'center'}}>充Q币</Text>
                        </View>
                    </View>
                    <Text style={{padding:8}}>娱乐.购物</Text>
                    <View style={{backgroundColor:'#fff'}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: width/4,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>话费.流量</Text>
                            </View>
                            <View style={{width: width/4, height: 50,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>充Q币</Text>
                            </View>
                            <View style={{width: width/4, height: 50,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>会员.钻</Text>
                            </View>
                            <View style={{width: width/4, height: 50,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>美团外卖</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: width/4,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>话费.流量</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{padding:8}}>生活.服务</Text>
                    <View style={{backgroundColor:'#fff'}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: width/4,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>话费.流量</Text>
                            </View>
                            <View style={{width: width/4, height: 50,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>充Q币</Text>
                            </View>
                            <View style={{width: width/4, height: 50,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>会员.钻</Text>
                            </View>
                            <View style={{width: width/4, height: 50,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>美团外卖</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: width/4,alignItems:'center'}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>话费.流量</Text>
                            </View>
                            <View style={{width: width/4, height: 50,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>充Q币</Text>
                            </View>
                            <View style={{width: width/4, height: 50,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>会员.钻</Text>
                            </View>
                            <View style={{width: width/4, height: 50,alignItems:'center',marginTop:16,marginBottom:8}}>
                                <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')}  style={[styles.tabBarImage]}/>
                                <Text style={{textAlign:'center'}}>美团外卖</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{height:100}}>

                    </View>
                </ScrollView>
            </View>
        );
    }
}

const theme = require("../../components/theme/Theme");
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
    content:{
        marginTop:16,
        backgroundColor:'#fff'
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
        fontSize: 18,
        color: '#fff',
    },
    tabBarImage: {
        width: 24,
        height: 24,
        borderRadius:12
    },
});
