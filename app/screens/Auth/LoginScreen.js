import React from 'react'
import { View, TextInput, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Button, } from 'react-native-elements'

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  _renderRegister = () => {
    this.props.navigation.navigate('Register')
  }
  _renderHome = () => {
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
          </View>
          <View style={{ paddingLeft: 50, paddingRight: 50 }}>
            <View style={{ marginBottom: 30, display: 'flex', flexDirection: 'row' }}>
              <Text style={styles.login_btn} onPress={this._renderRegister}>Sign Up</Text>
              <Text style={styles.register_head} >Sign In</Text>
            </View>
            <TextInput placeholder="Email" style={styles.register_input} />
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.register_input} />
            <View >
              <Button buttonStyle={styles.register_btn}
                title="Login" onPress={this._renderHome} />
            </View>
            <View>
              <Text style={styles.forgot_link}>Forgot Password?</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  logo: {
    width: 180,
    height: 180,
  },
  register_head: {
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  register_input: {
    borderBottomColor: 'rgb(246, 246, 246)',
    borderBottomWidth: 1,
    borderLeftWidth: 4,
    borderLeftColor: '#00b5f5e6',
    paddingLeft: 10,
    marginBottom: 25,
    height: 35
  },
  register_btn: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#00b5f5e6'
  },
  login_btn: {
    fontSize: 19,
    color: 'rgb(173, 177, 183)',
  },
  forgot_link: {
    color: '#00b5f5e6',
    textAlign: 'center',
    marginTop: 10
  }

})