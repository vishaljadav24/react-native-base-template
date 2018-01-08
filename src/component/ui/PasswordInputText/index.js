import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {View} from 'react-native';
import FloatingInputText from "../FloatingInputText";
import {styles} from "./styles"

export default class PasswordInputText extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            icEye: 'visibility-off',
            password: true
        }
    }

    changePwdType = () => {
        if (this.state.password) {
            this.setState({
                icEye: 'visibility',
                password: false
            });
        } else {
            this.setState({
                icEye: 'visibility-off',
                password: true
            });
        }

    };


    render() {
        return (
            <View style={{alignSelf: 'stretch'}}>
                <FloatingInputText {...this.props}
                                   password={this.state.password}/>
                <Icon style={styles.icon}
                      name={this.state.icEye}
                      size={25}
                      onPress={this.changePwdType}
                />
            </View>
        );
    }
}

