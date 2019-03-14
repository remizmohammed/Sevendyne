import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Dimensions,Image } from 'react-native'
import { Button } from 'react-native-elements'
import Header from '../../components/ux/Header';

const { width } = Dimensions.get('window')
const orderWidth = width - 30;

export default class ProfileScreen extends React.Component {
  static navigationOptions = { header: null }
  state = {
    orders: 
    [{number:'73648736486', pickup:'12/09/2019', delivery:'09/10/2019',items:'pants(2),Tshirt(3)', amount: 675,status: 'Confirmed'}]
  }

  _rendereditProfile = () => {
    this.props.navigation.navigate('editProfile')
  }
  render() {
    return (
      <View style={styles.container}>
       <Header homeIcon = {'home'} />
        <ScrollView style={{padding: 10,}}>
          <View style={{display:'flex', flexDirection:'row',marginTop: 20}}>
            <View style={{width: width/3}}>
              <Image source={require('../../assets/images/user.jpeg')} style={styles.profile_icon}/>
            </View>
            <View>
              <Text style={{fontWeight: 'bold',marginBottom:3}}>Hashim Ea</Text>
              <Text style={{marginBottom:3}}>hashimea@gmail.com</Text>
              <Text>485764895948</Text>
              <View style={{display:'flex', flexDirection:'row',marginTop: 10,marginBottom:5}}>   
                <Text style={{fontWeight: 'bold'}}>Total Order: 9</Text>
                <Text style={{fontWeight: 'bold',marginLeft:5}}>Pending Order: 0</Text>
              </View>
              <Button 
                titleStyle={{color: '#706f70d9'}}
                title="Edit Profile"
                buttonStyle={styles.profile_btn}
                onPress={this._rendereditProfile}
              />
            </View>
          </View>
          <View>
          <View style={{ marginTop: 30, marginBottom: 20,borderTopColor: '#706f70d9',borderTopWidth:1, width:500,marginLeft:-10 }}>
            
          </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  booking_head: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#706f70',
    flex: 1
  },
  profile_icon: {
    borderRadius: 100,
    width: 100,
    height: 100
  },
  profile_btn: {
    width:220,
    height:25,
    backgroundColor:'#fff',
    borderRadius: 5,
    borderColor:'#706f70',
    borderWidth:1,
    marginTop:10
  },

  order_head: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold"
  },
  card: {
    borderRadius: 8,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
    marginLeft: 5,
    width: orderWidth,

    borderWidth: 1,
    borderColor: "#ddd",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    shadowColor: "#ddd",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },

  iconStyle: {
    fontSize: 28,
    backgroundColor: "transparent",
    borderRadius: 100,
    padding: 10,
    color: "#fff"
  }
})