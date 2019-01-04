
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TextInput,StatusBar,TouchableOpacity,FlatList,Image,ScrollView } from 'react-native';
import {List} from 'antd-mobile-rn';
type Props = {};
const Item = List.Item;
export default class SettingScreen extends Component {
    test=()=>{
        alert(123)
    }
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
                        <Text style={styles.title}>设置</Text>
                    </View>
                    <View style={styles.flex1}>
                        <TouchableOpacity  style={{alignSelf:'flex-end',marginRight:10,display:'none'}}>
                            <Text style={styles.add}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.content}>
                        <List>
                            <Item
                                extra={
                                    <Image
                                        source={{
                                            uri:
                                                'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
                                        }}
                                        style={{ width: 29, height: 29,borderRadius:14.5 }}
                                    />
                                }
                                onClick={() => {
                                    this.test();
                                }}
                                arrow="horizontal"
                            >
                                账号管理
                            </Item>
                        </List>
                        <List>
                            <Item arrow="horizontal" onPress={() => {}}>
                                手机号码
                            </Item>
                        </List>
                        <List>
                            <Item arrow="horizontal" onPress={() => {}}>
                                QQ达人
                            </Item>
                        </List>
                    </View>
                    <View style={styles.content}>
                        <List>
                            <Item arrow="horizontal" onPress={() => {}}>
                                消息通知
                            </Item>
                        </List>
                        <List>
                            <Item arrow="horizontal" onPress={() => {}}>
                                消息通知
                            </Item>
                        </List>
                        <List>
                            <Item arrow="horizontal" onPress={() => {}}>
                                空间清理
                            </Item>
                        </List>
                    </View>
                    <View style={styles.content}>
                        <List>
                            <Item arrow="horizontal" onPress={() => {}}>
                                账号、设备安全
                            </Item>
                        </List>
                        <List>
                            <Item arrow="horizontal" onPress={() => {}}>
                                联系人、隐私
                            </Item>
                        </List>
                        <List>
                            <Item arrow="horizontal" onPress={() => {}}>
                                辅助功能
                            </Item>
                        </List>
                    </View>
                    <View style={styles.content}>
                        <List>
                            <Item arrow="horizontal" onPress={() => {}}>
                                免流量特权
                            </Item>
                        </List>
                    </View>
                    <View style={styles.content}>
                        <List>
                            <Item arrow="horizontal" onPress={() => {}}>
                                关于QQ与帮助
                            </Item>
                        </List>
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
    }
});
