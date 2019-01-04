import React from 'react';
import { ScrollView, Text, View,TouchableOpacity,Image,StyleSheet,StatusBar,Dimensions } from 'react-native';
import {Tabs,Icon, Grid,InputItem} from 'antd-mobile-rn';

const { height, width } = Dimensions.get("window");
export default class AlbumScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '相册',
        };
    }
    render() {
        const tabs = [
            { title: '相册' },
            { title: '图片' },
            { title: '视屏' },
        ];
        const style = {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#fff',
        };
        const list = [
            'check-circle', 'check', 'check-circle-o',
        ];
        const data = list.map(item => ({
            icon: (<Icon type={item} />),
            text: item,
        }));
        return (
            <View style={{ flex: 1}}>
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
                        <Text style={styles.title}>{this.state.title}</Text>
                    </View>
                    <View style={styles.flex1}>
                        <TouchableOpacity  style={{alignSelf:'flex-end',marginRight:10}} onPress={() =>{

                        }}>
                            <Text style={styles.insert}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Tabs tabs={tabs} tabBarPosition={'bottom'} onChange={(name)=>{
                    this.setState({ title: name.title });
                }}>
                    <View>
                        <ScrollView>
                            <View style={{flexDirection: 'row',marginTop:16,backgroundColor:'#fff',flex: 1}}>
                                <View style={{width: width/2, height: 200,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/2,height: 200}}/>
                                </View>
                                <View style={{width: width/2, height: 200,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/2,height: 200}}/>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View>
                        <ScrollView>
                            <View style={{flexDirection: 'row',marginTop:16,backgroundColor:'#fff'}}>
                                <View style={{width: width/3, height: 150,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/3,height: 150}}/>
                                </View>
                                <View style={{width: width/3, height: 150,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/3,height: 150}}/>
                                </View>
                                <View style={{width: width/3, height: 150,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/3,height: 150}}/>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row',marginTop:16,backgroundColor:'#fff'}}>
                                <View style={{width: width/3, height: 150,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/3,height: 150}}/>
                                </View>
                                <View style={{width: width/3, height: 150,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/3,height: 150}}/>
                                </View>
                                <View style={{width: width/3, height: 150,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/3,height: 150}}/>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row',marginTop:16,backgroundColor:'#fff'}}>
                                <View style={{width: width/3, height: 150,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/3,height: 150}}/>
                                </View>
                                <View style={{width: width/3, height: 150,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/3,height: 150}}/>
                                </View>
                                <View style={{width: width/3, height: 150,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/3,height: 150}}/>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row',marginTop:16,backgroundColor:'#fff'}}>
                                <View style={{width: width/3, height: 150,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/3,height: 150}}/>
                                </View>
                                <View style={{width: width/3, height: 150,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/3,height: 150}}/>
                                </View>
                                <View style={{width: width/3, height: 150,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/3,height: 150}}/>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View>
                        <ScrollView>
                            <View style={{flexDirection: 'row',marginTop:16,backgroundColor:'#fff'}}>
                                <View style={{width: width/3, height: 150,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/3,height: 150}}/>
                                </View>
                                <View style={{width: width/3, height: 150,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/3,height: 150}}/>
                                </View>
                                <View style={{width: width/3, height: 150,flexDirection: 'row',flex: 1,margin:4,backgroundColor:'#fff'}}>
                                    <Image name={'drafts'} size={24} source={require('../../assets/images/sunflower.jpg')} style={{width: width/3,height: 150}}/>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </Tabs>
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
    insert:{
        fontSize: 30,
        color: '#fff'
    }
});