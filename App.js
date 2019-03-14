import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import WelcomeScreen from './app/screens/WelcomeScreen';
import RegisterScreen from './app/screens/Auth/RegisterScreen';
import LoginScreen from './app/screens/Auth/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import BookingScreen from './app/screens/client/Booking';
import BookingForm from './app/screens/client/BookingForm';
import AddressForm from './app/screens/client/AddressForm';
import ProfileScreen from './app/screens/Profile/ProfileScreen';
import EditProfile from './app/screens/Profile/EditProfile';


const MainNavigator = createStackNavigator({
  Welcome: {screen: WelcomeScreen},
  Register: {screen: RegisterScreen},
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  Booking: {screen: BookingScreen},
  BookingForm: {screen: BookingForm},
  AddressForm: {screen: AddressForm},
  Profile: {screen: ProfileScreen},
  editProfile: {screen: EditProfile}
});
const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppContainer />
        </View>
      );
    }
  }

  

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./app/assets/images/robot-dev.png'),
        require('./app/assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./app/assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef3f9',
  },
});
