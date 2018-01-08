import {
    StackNavigator,
} from 'react-navigation';
import {
    NavigationActions
} from 'react-navigation';
import {Color} from "src/utils/color";
import Start from "src/screens/Start/index";
import Home from "src/screens/Home/index";

const navigationTitle = {
    color: Color.WHITE
};

const navigationStyle = {
    backgroundColor: Color.PRIMARY,
};

const drawerContentItems = {
    activeTintColor: Color.PRIMARY,
    inactiveTintColor: Color.BLACK,

};


export const NotAuthenticated = StackNavigator({
    Start: {
        screen: Start,
        navigationOptions: {
            header: null
        }
    }
});

export const Authenticated = StackNavigator({
    Start: {
        screen: Home,
        navigationOptions: {
            title: "Home",
            headerTitleStyle: navigationTitle,
            headerStyle: navigationStyle,
            headerBackTitle: null,
            headerTintColor: Color.WHITE,
        }
    }
});

// redirect Authenticate or NotAuthenticate Screen
export const createRootNavigator = (signedIn = false) => {
    return StackNavigator(
        {
            NotAuthenticated: {
                screen: NotAuthenticated,
                navigationOptions: {
                    header: null
                }
            },
            Authenticated: {
                screen: Authenticated,
                navigationOptions: {
                    header: null
                }
            }
        },
        {
            initialRouteName: signedIn ? "Authenticated" : "NotAuthenticated"
        }
    );
};

// navigate screen only one time on open of any register stack's screen
const navigateOnce = (getStateForAction) => (action, state) => {
    const {type, routeName} = action;
    return (
        state &&
        type === NavigationActions.NAVIGATE &&
        routeName === state.routes[state.routes.length - 1].routeName
    ) ? null : getStateForAction(action, state);
};

NotAuthenticated.router.getStateForAction = navigateOnce(NotAuthenticated.router.getStateForAction);
Authenticated.router.getStateForAction = navigateOnce(Authenticated.router.getStateForAction);