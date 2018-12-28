import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,StatusBar,TouchableOpacity,Image} from 'react-native';
import MessageModal from "../../components/messageModal/MessageModal";
export default class MessageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state:false
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部
        }
    };
    render() {
        const {navigation} = this.props;
        return (
            <View style={{position:'relative'}}>
                <StatusBar backgroundColor="#0187FB" barStyle="light-content" />
                <View style={styles.header}>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() =>  navigation.openDrawer()} style={{alignSelf:'flex-start',marginLeft:10}}>
                            <Image source={require('../../assets/images/logo.png')} style={styles.avatar} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flex1}>
                        <Text style={styles.title}>消息</Text>
                    </View>
                    <View style={styles.flex1}>
                        <TouchableOpacity onPress={() => this.setState({ state: !this.state.state })} style={{alignSelf:'flex-end',marginRight:10}}>
                            <Text style={styles.add}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    this.state.state == false ?( null):(
                        <View style={{position:'absolute',right:5,top:44,elevation: 99}}>
                            <View
                                style={{
                                    width: 0,
                                    height: 0,
                                    borderColor: 'transparent',
                                    borderLeftWidth: 7,
                                    borderBottomWidth: 10,
                                    borderRightWidth: 7,
                                    borderBottomColor: '#fff',
                                    marginLeft:80
                                }}
                            />
                            <View style={{backgroundColor:'#fff',padding:4}}>
                                <Text style={{paddingTop:5,paddingBottom:5,borderBottomWidth:1,borderBottomColor:'#eee'}}>创建群聊</Text>
                                <Text style={{paddingTop:5,paddingBottom:5,borderBottomWidth:1,borderBottomColor:'#eee'}}>加好友/群</Text>
                                <Text style={{paddingTop:5,paddingBottom:5,borderBottomWidth:1,borderBottomColor:'#eee'}}>扫一扫</Text>
                                <Text style={{paddingTop:5,paddingBottom:5,borderBottomWidth:1,borderBottomColor:'#eee'}}>面对面快传</Text>
                                <Text style={{paddingTop:5,paddingBottom:5,borderBottomWidth:1,borderBottomColor:'#eee'}}>付款</Text>
                                <Text style={{paddingTop:5,paddingBottom:5}}>拍摄</Text>
                            </View>
                        </View>
                    )
                }
                <View>
                    <View>
                        <MessageModal ref="son"/>
                    </View>
                    <Button
                        title='控制显示与隐藏'
                        onPress={()=>{
                            this.refs.son.setModalVisible(this.state.state)
                        }}
                    />
                    <Button
                        title='消息'
                        onPress={()=>{
                            navigation.goBack()
                        }}
                    />
                </View>
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
