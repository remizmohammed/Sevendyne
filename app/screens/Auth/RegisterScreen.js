import React from 'react'
import { View, TextInput, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Button } from 'react-native-elements'
import axios from 'axios'

export default class RegisterScreen extends React.Component {
  static navigationOptions = {header: null,};
  state ={
    fullName:null,
    email:null,
    phone:null,
    password:null
  }
  validate() {
    return true
  }
  updateState(value, name) {
    this.setState({[name]: value})
  }

  register = () => {
    let user = {
      "fullName": this.state.fullName,
      "email":this.state.email,
      "phone":this.state.phone,
      "password":this.state.password
    }
    axios.post('http://127.0.0.1/api/register', user)
      .then(res =>  res.data)
      .then(response => {
        if(response.success){
          console.log('success')
        }
      })
  }

  _renderHome = () => {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="position" enabled>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
          </View>

          <View style={{ paddingLeft: 50, paddingRight: 50 }}>
            <View style={{ marginBottom: 30, display: 'flex', flexDirection: 'row' }}>
              <Text style={styles.register_head}>Sign Up</Text>
              <Text style={styles.login_btn} onPress={this._renderHome}>Sign In</Text>
            </View>
            <TextInput 
              placeholder="Full Name" 
              style={styles.register_input} 
              value={this.state.fullName}
              onChangeText={data => this.updateState(data, 'fullName')}
            />
            <TextInput 
              placeholder="Email" 
              style={styles.register_input} 
              value={this.state.email}
              onChangeText={data => this.updateState(data, 'email')}
            />
            <TextInput 
              placeholder="Phone" 
              style={styles.register_input} 
              value={this.state.phone}
              onChangeText={data =>  this.updateState(data, 'phone')}
            />
            <TextInput 
              placeholder="Password" 
              secureTextEntry={true} 
              style={styles.register_input} 
              value={this.state.password
            }
            />
            <View >
              <Button buttonStyle={styles.register_btn} onPress={this.register} title="Register" />
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
    height: 500
  },
  logo: {
    width: 180,
    height: 180,
  },
  register_head: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  register_input: {
    borderBottomColor: 'rgb(246, 246, 246)',
    borderBottomWidth: 1,
    borderLeftWidth: 4,
    borderLeftColor: '#00b5f5e6',
    paddingLeft: 10,
    marginBottom: 20,
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
    marginLeft: 15,
    marginTop: 1
  }

})

