import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'

export default class WelcomeScreen extends React.Component{

registerNavigate = () => {
  setTimeout(() => {
    this.props.navigation.navigate('Register')
  }, 3000)
}
  componentDidMount() {
    this.registerNavigate()
  }

  static navigationOptions = {
    header: null,
  };
  register = () => {
    this.props.navigation.navigate('Register')
  }
  render() {
    return(
      <View style={styles.container}> 
        <View>
          <Image style={styles.logo} source={require('../assets/images/logo.png')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 180,
    height: 180
  }
})