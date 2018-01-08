import React from 'react';
import {Color} from "src/utils/color";
import {StyleSheet, PixelRatio} from 'react-native';
import {fontNormal} from "src/utils/theme";
import Style from "src/utils/styles";


export const styles = StyleSheet.create({

    roundButton_Container: {
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 30,
        borderWidth: 1,
        borderBottomWidth: 0,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    roundButton_Text: {
        paddingLeft: 10,
        paddingRight: 10,
        color: Color.WHITE,
        fontSize: Style.FONT_SIZE
    }
});