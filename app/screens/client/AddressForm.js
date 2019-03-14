import React from 'react';

import { View, Text, StyleSheet, ScrollView, TextInput,Image, Dimensions,KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import { Button, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from "react-native-modal-datetime-picker";
import Modal from "react-native-modal";
import moment from "moment";
import Header from '../../components/ux/Header';

const { width } = Dimensions.get('window')
const {height} =  Dimensions.get('window').height

export default class AddressForm extends React.Component {
  static navigationOptions = { header: null }
  state = {
    address: '',
    modalVisible: false,
    datepickevisible: false,
    pickupdate: "",
    deliverydate: "",
  }
  _renderModal = () => {
    this.setState({modalVisible: true})
    setTimeout(() => {
      this.props.navigation.navigate('Home')
      this.setState({modalVisible:false})
    }, 3000)
  }

  _showDateTimePicker = () => {
    this.setState({ datepickevisible: true });
  };
  _hideDateTimePicker = () => {
    this.setState({ datepickevisible: false });
  };
  _handlepickupDate = data => {
    this.setState({
      datepickevisible: false,
      pickupdate: moment(data).format("MMM Do YY")
    });
  };
  _handledeliverDate = data => {
    this.setState({
      datepickevisible: false,
      deliverydate: moment(data).format("MMM Do YY")
    });
  };
  render() {
    return (
      <View style={styles.container}>
       <Header 
          homeIcon = {'home'}
          cartIcon = {'shopping-cart'}
        />
        <KeyboardAvoidingView behavior="position" enabled>
        <ScrollView style={{padding: 10,}}>
          <View >
            <View style={{ marginTop: 10, }}>
              <Text style={styles.booking_head}>Select Address</Text>
              <Text style={{ marginTop: 10, color: '#706f70' }}>Select Pickup and Delivery Adress</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
              <Button
                buttonStyle={{ backgroundColor: this.state.address === 'home' ? "#00b5f5" : '#ddd', padding: 20, marginLeft: 10 }}
                onPress={() => this.setState({ address: 'home' })}
                icon={
                  <Icon
                    name="home"
                    color={'#fff'}
                    size={25}
                  />
                }
                title="Home"
              />
              <Button
                buttonStyle={{ backgroundColor: this.state.address === 'office' ? "#00b5f5" : '#ddd', padding: 20, marginLeft: 10 }}
                onPress={() => this.setState({ address: 'office' })}
                icon={
                  <Icon
                    name="building"
                    color={'#fff'}
                    size={20}
                  />
                }
                title="Office"
              />
              <Button
                buttonStyle={{ backgroundColor: this.state.address === 'other' ? "#00b5f5" : '#ddd', padding: 20, marginLeft: 10 }}
                onPress={() => this.setState({ address: 'other' })}
                icon={
                  <Icon
                    name="safari"
                    color={'#fff'}
                    size={20}
                  />
                }
                title="Other"
              />
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: '600', marginBottom: 10 }}>Enter Address Details</Text>
            <View>
              <TextInput placeholder="Building Name & Number" style={styles.textbox} />
              <TextInput placeholder="Street Adress, Landmark etc" style={styles.textbox} />
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <TextInput placeholder="city" style={[{ width: width / 2 - 10 }, styles.textbox]} />
                <TextInput placeholder="Zip Code" style={[{ width: width / 2 - 10, marginLeft: 10 }, styles.textbox]} />
              </View>
              <TextInput placeholder="Email" style={styles.textbox} />
              <TextInput placeholder="mobile" style={styles.textbox} />
            </View>
            <View style={styles.order_date}>
              <View style={{borderBottomWidth: 2,borderBottomColor: "#fff",width: 150,padding: 3, marginBottom:8}}>
                <TouchableOpacity
                  style={{ display: "flex", flexDirection: "row" }}
                  onPress={this._showDateTimePicker}>
                  <View style={{ marginBottom: 10 }}>
                    <Icon color="#00b5f5" size={20} name="calendar" />
                  </View>
                  <Text style={{ marginLeft: 15, color: "#00000080" }}>
                    {this.state.pickupdate}
                  </Text>
                </TouchableOpacity>
                <DateTimePicker
                  isVisible={this.state.datepickevisible}
                  onCancel={this._hideDateTimePicker}
                  onConfirm={this._handlepickupDate}
                  mode={"date"}
                />
              </View>
              <View style={{borderBottomWidth: 2,borderBottomColor: "#fff",width: 150,padding: 3, marginBottom:8,marginLeft: 20}}>
                <TouchableOpacity
                  style={{ display: "flex", flexDirection: "row" }}
                  onPress={this._showDateTimePicker}
                >
                  <View style={{ marginBottom: 10 }}>
                    <Icon color="#00b5f5" size={20} name="calendar" />
                  </View>
                  <Text style={{ marginLeft: 15, color: "#00000080" }}>
                    {this.state.deliverydate}
                  </Text>
                </TouchableOpacity>
                <DateTimePicker
                  isVisible={this.state.datepickevisible}
                  onCancel={this._hideDateTimePicker}
                  onConfirm={this._handledeliverDate}
                  mode={"date"}
                />
              </View>
            </View>
            <View>
              <Button title="Amount Payable $99" buttonStyle={{backgroundColor:'#00b5f5'}} onPress={this._renderModal} />
            </View>
          </View>
          <View style={{display:'flex',alignItems:'center',justifyContent:'center',}}>
            <Modal isVisible={this.state.modalVisible} style={styles.modal}
              onBackdropPress={() => this.setState({modalVisible:false})} > 
              <View style={{alignItems:'center',justifyContent:'center'}}>
                <Image source={require('../../assets/images/icons/done.png')} />
                <Text style={{fontWeight:'700', marginTop:10,marginBottom:5,fontSize: 18}}>You have Successfully Ordered !!!</Text>
                <Text>We will get back to you soon...</Text>
                <Text style={{fontWeight:'900', marginTop:5,fontSize: 20}}>
                  Thank You
                </Text>
              </View>
            </Modal>
          </View>
        </ScrollView>
        </KeyboardAvoidingView>
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
  textbox: {
    borderColor: '#fff',
    borderWidth: 1,
    height: 45,
    paddingLeft: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5
  },
  modal: {
    height: height*0.7,
    flex: 0,
    width:width - 40,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    padding:10,
    borderRadius:5
  },

  order_date: {
    marginTop: 10,
    marginLeft: 15,
    display: "flex",
    flexDirection: "row"
  },
})