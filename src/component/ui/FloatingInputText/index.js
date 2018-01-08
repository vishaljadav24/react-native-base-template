import React from 'react';
import {TextField} from 'react-native-material-textfield';
import {Color} from "src/utils/color";

export default class FloatingInputText extends React.Component {


    render() {
        return (

            <TextField
                tintColor={Color.PRIMARY}
                containerStyle={this.props.style}
                label={this.props.placeholder}
                textColor={Color.INPUT_TEXT_PRIMARY}
                error={this.props.error}
                secureTextEntry={this.props.password}
                keyboardType={this.props.keyboardType}
                prefix={this.props.prefix}
                onChangeText={this.props.onChangeText}
                value={this.props.value}
                editable={this.props.editable}
                autoCapitalize={this.props.autoCapitalize}>
                {this.props.children}
            </TextField>
        );
    }
}

