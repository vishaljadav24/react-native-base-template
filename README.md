# React Native Base Template
Template for create react native project(Android and iOS) with below functionalities.

## What's in the template?

- Managable React Native project structure
- [React Navigation][] 
- [Redux][]
- [Axios][] Wrapper with builder pattern
- Custom Components
- Common utils methods
- Authentcate and UnAuthenticate manage by [Redux][] and [Redux Persist][]

[React Navigation]: https://reactnavigation.org/
[Redux]: https://redux.js.org/
[Axios]: https://github.com/axios/axios
[Redux Persist]:https://github.com/rt2zz/redux-persist

## How to use?
`react-native init ProjectName --template https://github.com/vishaljadav24/react-native-base-template`

### Use Axios Wrapper
```js
import {APIRequest} from "src/api";

 new APIRequest.Builder()
            .post()
            .setReqId({API_REQUEST_ID})
            .reqURL("API_END_POINT")
            .jsonParams({BODY_PARAMS})
            .response(this.onResponse)
            .error(this.onError)
            .build()
            .doRequest();

onResponse = (response, reqId) => {
    // handle api response by request id
}

onError = (error, reqId) => {
    // handle api error by request id
}
```
