import React from 'react';
import {View} from 'react-native';
import Label from 'src/component/ui/Label';

export default class Start extends React.Component {

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Label small>Not authenticate user screen.</Label>
            </View>
        )
    }

}