import React from 'react'
import { View,Text, StyleSheet, Dimensions,Image } from 'react-native'
import { Button } from 'react-native-elements'
import { LinearGradient } from 'expo';

export default class Card extends React.Component{
  _renderPage = () => {
    this.props.navigation.navigate('Login')
  }
  render() {
    const {title,description, width, icons} = this.props
      return(
        <View style={{width: width}}>
          <View style={styles.card}>
          <View style={{display:'flex', flexDirection:'row' }}>
              <View>
                  <Button
                   buttonStyle={styles.iconStyle}
                   icon={
                     <Image style={{width: 40, height: 40}} source={icons}
                     />
                   }
                  />
              </View>
              <View>
                <Text style={styles.card_title}>{title}</Text>
                <Text style={styles.card_desc}>{description}</Text>
              </View>
          </View>
          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  card:{
    height: 60,
    borderRadius: 8,
    backgroundColor: '#00b5f5',
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
    marginLeft: 5,

    borderWidth: 1,
    borderColor: '#00b5f5',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    shadowColor: '#ddd',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  card_title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
    marginTop: 5,
    color: '#fff'
  },
  iconStyle: {
    marginLeft: 4,
    backgroundColor: 'transparent'
  },
  card_desc: {
    marginLeft: 4,
    color: '#ddd',
    fontSize: 14,
    color: '#fff'
  },
})