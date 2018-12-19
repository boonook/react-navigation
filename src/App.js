import React,{Component} from 'react';
import {
    View,Text
} from 'react-native'
import AppStackNavigator from "./Router";

export default class App extends Component{
    render(){
        return <AppStackNavigator></AppStackNavigator>
    }
}

