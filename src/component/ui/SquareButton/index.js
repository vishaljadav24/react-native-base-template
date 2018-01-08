import React from 'react';
import {
    View,
    TouchableHighlight,
    Text
} from 'react-native';
import Ripple from 'src/component/ui/Ripple';
import {Color} from "src/utils/color";
import {styles} from "./styles";
import PropTypes from 'prop-types';

class SquareButton extends React.Component {

    onClick = () => {
        if (this.props.click)
            this.props.click();
    };

    render() {
        let borderColor = this.props.borderColor ? this.props.borderColor : this.props.backgroundColor;
        return (
            <View style={[this.props.style]}>
                <Ripple style={[styles.squareButton_Container, {
                    backgroundColor: this.props.backgroundColor,
                    borderColor: borderColor
                }]} rippleContainerBorderRadius={30} onPress={this.onClick}>
                    <Text style={styles.squareButton_Text}>
                        {this.props.children}
                    </Text>
                </Ripple>
            </View>
        );
    }
}


SquareButton.defaultProps = {
    ...TouchableHighlight.defaultProps,
    backgroundColor: Color.PRIMARY
};
SquareButton.propTypes = {
    ...TouchableHighlight.propTypes,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
};
export default SquareButton;
