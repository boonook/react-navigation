import React from 'react';
import { ScrollView, Text, View,TouchableOpacity,Image,StyleSheet,StatusBar } from 'react-native';
import {Tabs,Icon, Grid,InputItem} from 'antd-mobile-rn';
export default class FriendAdd extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }
    render() {
        const tabs = [
            { title: '找人' },
            { title: '找群' },
            { title: '找公众号' },
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
                        <Text style={styles.title}>动态</Text>
                    </View>
                    <View style={styles.flex1}>
                        <TouchableOpacity  style={{alignSelf:'flex-end',marginRight:10,display:'none'}}>
                            <Text style={styles.add}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Tabs tabs={tabs}>
                    <View>
                        <InputItem
                            clear
                            value={this.state.value}
                            onChange={value => {
                                this.setState({
                                    value,
                                });
                            }}
                            placeholder="搜索"
                        >
                        </InputItem>
                        <Grid data={data} columnNum={3} hasLine={false} activeStyle={false} />
                        <Text>Content of First Tab</Text>
                    </View>
                    <View>
                        <Text>Content of Second Tab</Text>
                    </View>
                    <View>
                        <Text>Content of Third Tab</Text>
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
    }
});