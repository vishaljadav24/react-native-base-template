import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import reducer from 'src/redux/reducer';

const middleWare = [];
const store = createStore(
    reducer,
    {},
    compose(applyMiddleware(...middleWare), autoRehydrate())
);

persistStore(store, {storage: AsyncStorage});

export default store;