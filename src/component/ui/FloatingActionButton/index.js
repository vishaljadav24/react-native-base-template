import React from 'react';
import {circleStyle} from "src/utils/theme";
import {Color} from "src/utils/color";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Ripple from 'src/component/ui/Ripple';
import PropTypes from 'prop-types';

class FloatingActionButton extends React.Component {
    onClick = () => {
        if (this.props.click)
            this.props.click();
    };

    render() {
        let stylesArray = [];

        if (this.props.left)
            stylesArray.push({alignSelf: 'flex-start'});
        else if (this.props.right)
            stylesArray.push({alignSelf: 'flex-end'});
        else if (this.props.center)
            stylesArray.push({alignSelf: 'center'});

        stylesArray.push({
            backgroundColor: this.props.color,
            height: this.props.size,
            width: this.props.size,
            marginTop: this.props.mt,
            marginBottom: this.props.mb,
            marginLeft: this.props.ml,
            marginRight: this.props.mr,
        });

        stylesArray.push(this.props.style);
        return (
            <Ripple style={[circleStyle, stylesArray, {
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 10
            }]} rippleContainerBorderRadius={30} onPress={this.onClick}>
                <Icon name={this.props.icon}
                      size={this.props.iconSize}
                      color={this.props.iconColor}/>
            </Ripple>

        );
    }


}

FloatingActionButton.defaultProps = {
    size: 50,
    color: Color.PRIMARY,
    icon: 'home',
    iconColor: Color.WHITE,
    iconSize: 20,
    mt: 0,
    mb: 0,
    ml: 0,
    mr: 0,
    left: false,
    right: false,
    center: false,

};

FloatingActionButton.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.number,
    mt: PropTypes.number,
    mb: PropTypes.number,
    ml: PropTypes.number,
    mr: PropTypes.number,
    left: PropTypes.bool,
    right: PropTypes.bool,
    center: PropTypes.bool,
};

export default FloatingActionButton;
