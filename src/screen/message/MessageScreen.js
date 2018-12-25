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
            <View>
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
                        <TouchableOpacity onPress={() => this.refs.son.setModalVisible(this.state.state)} style={{alignSelf:'flex-end',marginRight:10}}>
                            <Text style={styles.add}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
               <View>
                   <MessageModal ref="son"/>
               </View>
                <View>
                    {
                        this.state.state == false ?( null):(
                            <Text>//部位空时想要显示的内容</Text>
                        )
                    }
                </View>
                <Button
                    title='控制显示与隐藏'
                    onPress={()=>{
                        this.setState({ state: !this.state.state });
                    }}
                />
                <Button
                    title='消息'
                    onPress={()=>{
                        navigation.goBack()
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
