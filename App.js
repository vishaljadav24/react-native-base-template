import React from 'react';
import {createRootNavigator} from "src/router/index";
import {Provider} from 'react-redux';
import store from 'src/redux/store';
import {persistStore} from 'redux-persist';
import {
    AsyncStorage,
    DeviceEventEmitter
} from 'react-native';
import {notificationKey} from "src/utils/constants";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignedIn: false,
            checkedSignIn: false
        };
    }

    componentWillMount() {
        // check user or token available in redux store
        persistStore(store, {storage: AsyncStorage}, () => {
            this.setState({
                checkedSignIn: true,
                isSignedIn: (store.getState().token !== undefined
                    && store.getState().token !== null)
                && (store.getState().user !== undefined
                    && store.getState().user !== null)
            })
        });

        // execute when token invalid and do logout
        DeviceEventEmitter.addListener(notificationKey.LOGOUT, (e) => {
            this.setState({
                isSignedIn: false
            });
        });
    }

    render() {
        const {checkedSignIn, isSignedIn} = this.state;
        if (!checkedSignIn) {
            return null;
        }
        // redirect Authenticate or NotAuthenticate Screen
        const Layout = createRootNavigator(isSignedIn);
        return (
            <Provider store={store}>
                <Layout/>
            </Provider>
        );
    }
}

export default App;

