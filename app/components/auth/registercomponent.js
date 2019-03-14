import React from 'react'
import { View, TextInput, Button, Text, Image, StyleSheet } from 'react-native'

export default class RegisterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
      }
      validate(){
          return true
      }
      register = () => {
        if (this.validate()) {
          if (this.props.onRegister) {
            this.props.onRegister(this.state);
          }
        }
      };
    
      render() {
        return (
          <View style={{padding: 10}}>
            <TextInput
              style={{height: 40}}
              placeholder="fname"
              onChangeText={(firstName) => this.setState({firstName})}
            />
            <TextInput
              style={{height: 40}}
              placeholder="lname"
              onChangeText={(lastName) => this.setState({lastName})}
            />
            <TextInput
              style={{height: 40}}
              placeholder="email"
              onChangeText={(email) => this.setState({email})}
            />
            <TextInput
              style={{height: 40}}
              secureTextEntry={true}
              placeholder="password"
              onChangeText={(password) => this.setState({password})}
            />
            <View>
                <Button 
                    title="register"
                    onPress={this.register}
                />
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15
    },
    reghead: {
        alignItems: 'center'
    },
    regicon: {
        width: 70,
        height: 70
    },
    form: {
        marginTop: 25
    },
    TextInput: {
        height: 10,
        padding: 10
    }


})