import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View } from "react-native";

export default class MessageModal extends Component {
    state = {
        modalVisible: false
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    this.setModalVisible(!this.state.modalVisible);
                }}
            >
                <View style={{backgroundColor:'#fff',flex:1}}>
                    <View>
                        <Text>Hello World!</Text>

                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}
                        >
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        );
    }
}