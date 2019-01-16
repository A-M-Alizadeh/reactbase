import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Router,Scene,Lightbox, Drawer } from 'react-native-router-flux';
import {Root} from 'native-base'
import {BackAndroid,BackHandler,ActivityIndicator,View} from 'react-native'
import Colors from './components/utilities/Colors'
import {connect,Provider} from 'react-redux'
import {store,persistor} from './components/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Actions } from 'react-native-router-flux';


EStyleSheet.build({
  $statusBarColor:Colors.statusBarColor,
  $colorPrimaryDark:Colors.colorPrimaryDark,
  $colorPrimary:Colors.colorPrimary,
  $accentColor:Colors.accentColor,
  $fontFamily:'iransans'
});

// comppnents
import Home from "./screens/root/home/Home";
import Login from "./screens/login/Login";
import LoginLightbox from "./components/lightbox/LoginLightbox";
import Splash from './screens/splash/Splash';
import DrawerLayout from './components/drawer/drawerLayout';
import Settings from './screens/root/settings/Settings';
import HomePage from './screens/homePage/HomePage';

export default class App extends React.Component {
  componentWillMount(){
    console.log('test test test');
  }
  renderLoading = ()=>(
    <View style={{flex:1}}>
      <ActivityIndicator size='large'/>
    </View>
  )

  onBackPress = () => {
    if (Actions.state.index === 0) {
      return false
    }
    Actions.pop()
    return true
}

//test to exit the app-----------------------------------------
// state = {
//   backClickCount: 0
// };

// componentWillMount() {
//   BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
// }

// componentWillUnmount() {
//   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
// }

// _spring() {
//   this.setState({backClickCount: 1}, () => {
//     BackAndroid.exitApp();
//   });

// }

// handleBackButton = () => {
//   this.state.backClickCount == 0 ? ToastMaker.withoutAction('برای خروج دوبار روی بازگشت بزنید') : this._spring();
//   this.state.backClickCount == 1 ? BackHandler.exitApp() : this._spring();

//   return true;
// };
//test to exit the app-----------------------------------------

  render() {
    const RouterWithRedux = connect()(Root);
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>
              <Root>
                <Router backAndroidHandler={this.onBackPress}>
                  <Scene hideNavBar>
                      <Scene key="root" hideNavBar>
                        <Drawer contentComponent={DrawerLayout} key="drawer" drawerPosition="right">
                        <Scene hideNavBar>
                          <Scene key="homePage" component={HomePage} initial back='true'/>
                          <Scene key="home" component={Home}/>
                          <Scene key="settings" component={Settings}/>
                        </Scene>
                        </Drawer>
                      </Scene>

                      <Lightbox key="auth">
                        <Scene hideNavBar>
                          <Scene key="login" component={Login} initial/>
                        </Scene>

                        <Scene key="loginLightBox" component={LoginLightbox}/>
                      </Lightbox>

                      <Scene key="splash" hideNavBar component={Splash} initial/>
                  </Scene>

                </Router>
              </Root>
            </PersistGate>
          </Provider>
    );
  }
}
