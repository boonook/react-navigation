import React,{Component} from 'react';
import {Provider} from 'mobx-react';
import AppStackNavigator from "./Router";
import store from './store';
export default class App extends Component{
    render(){
        return (
            <Provider {...store}>
                <AppStackNavigator></AppStackNavigator>
            </Provider>
        )
    }
}

