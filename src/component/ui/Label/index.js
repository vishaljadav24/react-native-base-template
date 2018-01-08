import React from 'react';
import {Text} from 'react-native';
import {Color} from 'src/utils/color';
import {fontXSmall, fontSmall, fontNormal, fontLarge, fontXLarge, fontXXLarge} from 'src/utils/theme';
import PropTypes from 'prop-types';

class Label extends React.Component {

    onClick = () => {
        if (this.props.onPress)
            this.props.onPress();
    };

    render() {
        let stylesArray = [];
        if (this.props.xxlarge)
            stylesArray.push({fontSize: fontXXLarge});
        else if (this.props.xlarge)
            stylesArray.push({fontSize: fontXLarge});
        else if (this.props.large)
            stylesArray.push({fontSize: fontLarge});
        else if (this.props.normal)
            stylesArray.push({fontSize: fontNormal});
        else if (this.props.small)
            stylesArray.push({fontSize: fontSmall});
        else if (this.props.xsmall)
            stylesArray.push({fontSize: fontXSmall});
        else
            stylesArray.push({fontSize: fontNormal});

        if (this.props.bold)
            stylesArray.push({fontWeight: "500"});
        else if (this.props.bolder)
            stylesArray.push({fontWeight: "bold"});
        else if (this.props.light)
            stylesArray.push({fontWeight: "400"});
        else if (this.props.lighter)
            stylesArray.push({fontWeight: "200"});
        else
            stylesArray.push({fontWeight: "normal"});

        if (this.props.roboto_medium)
            stylesArray.push({fontFamily: "Roboto-Medium"});
        else if (this.props.roboto_regular)
            stylesArray.push({fontFamily: "Roboto-Regular"});
        else
            stylesArray.push({fontFamily: "Roboto-Regular"});

        stylesArray.push({
            color: this.props.color,
            marginTop: this.props.mt,
            marginBottom: this.props.mb,
            marginLeft: this.props.ml,
            marginRight: this.props.mr,
            textAlign: this.props.align,
        });
        stylesArray.push(this.props.style);
        return (
            <Text numberOfLines={this.props.singleLine ? 1 : null} style={stylesArray}
                  onPress={this.props.onPress ? this.onClick : null}>
                {this.props.children}
            </Text>
        );
    }
}

Label.defaultProps = {
    xsmall: false,
    small: false,
    normal: false,
    large: false,
    xlarge: false,
    xxlarge: false,
    bold: false,
    bolder: false,
    lighter: false,
    light: false,
    color: Color.TEXT_PRIMARY,
    roboto_regular: false,
    roboto_medium: false,
    align: "left",
    mt: 0,
    mb: 0,
    ml: 0,
    mr: 0,
    singleLine: false
};
Label.propTypes = {
    xsmall: PropTypes.bool,
    small: PropTypes.bool,
    normal: PropTypes.bool,
    large: PropTypes.bool,
    xlarge: PropTypes.bool,
    xxlarge: PropTypes.bool,
    bold: PropTypes.bool,
    bolder: PropTypes.bool,
    light: PropTypes.bool,
    lighter: PropTypes.bool,
    color: PropTypes.string,
    roboto_medium: PropTypes.bool,
    roboto_regular: PropTypes.bool,
    mt: PropTypes.number,
    mb: PropTypes.number,
    ml: PropTypes.number,
    mr: PropTypes.number,
    align: PropTypes.string,
    singleLine: PropTypes.bool
};
export default Label;