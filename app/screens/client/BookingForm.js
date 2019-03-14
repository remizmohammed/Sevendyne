import React from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions, Image } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/ux/Header';

const { width } = Dimensions.get('window')

export default class BookingForm extends React.Component {
  static navigationOptions = { header: null }
  state = {
    order: [
      { name: 'Shirt(Men)', charge: '10', image: require('../../assets/images/products/men/shirt.jpg') },
      { name: 'Pant(Women)', charge: '5', image: require('../../assets/images/products/men/jeans.png') },
      { name: 'Jacket(Men)', charge: '5', image: require('../../assets/images/products/men/jacket.jpg') },
      { name: 'Shirt(Men)', charge: '10', image: require('../../assets/images/products/men/shirt.jpg') },
    ]
  }

  render() {
    return (
      <View style={styles.container}>
      <Header 
        homeIcon = {'home'}
      />
        <ScrollView style={{padding: 10,}}>
          <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10, }}>
            <Text style={styles.booking_head}>Confirm Order</Text>
            <Button icon={
              <Icon
                name="pencil"
                color='#000'
                size={18}
              />
            }
              buttonStyle={{ backgroundColor: 'transparent' }}
            />
          </View>
          {this.state.order.map(data => {
            return (
              <View style={styles.card}>
                <Image source={data.image} style={{ width: 70, height: 70 }} />
                <View
                  style={{ display: 'flex', flexDirection: 'column', flex: 1, slefAlign: 'strech', marginLeft: 15, marginTop: 5 }}>
                  <Text style={styles.card_title}>{data.name}</Text>
                  <Text style={{ fontWeight: 'bold', marginBottom: 5, color: '#b1adb7' }}>Wash & Fold</Text>
                  <Text style={styles.card_amount}>${data.charge}</Text>
                </View>
                <View style={styles.count}>
                  <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
                    <Text style={{ fontWeight: 'bold', marginBottom: 5, color: '#b1adb7' }}>x3</Text>
                  </View>
                </View>
              </View>
            )
          })}

          <View style={{ flex: 0.2 }}>
            <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 10, marginTop: 10 }}>
              <Text style={[{ flex: 1 }, styles.total_txt]}>Total</Text>
              <Text style={{ fontWeight: '600', color: '#00b5f5', fontSize: 20 }}>$99.95</Text>
            </View>
            <View>
              <Button
                buttonStyle={{ backgroundColor: '#00b5f5' }}
                title="Place Order"
                onPress={() => this.props.navigation.navigate('AddressForm')}
              />
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
  card: {
    height: 90,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
    marginLeft: 5,
    width: width - 35,

    borderWidth: 1,
    borderColor: '#ddd',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    shadowColor: '#ddd',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    display: 'flex',
    flexDirection: 'row'
  },
  card_title: {
    fontWeight: 'bold'
  },
  card_amount: {
    color: '#00b5f5',
    fontWeight: '600',
    fontSize: 15
  },
  total_txt: {
    fontWeight: '600',
    color: '#000',
    fontSize: 18,
    marginBottom: 10
  }
})