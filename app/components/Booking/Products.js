import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, Picker, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
const { width } = Dimensions.get('window')

export default class Products extends React.Component {
  state = {
    washType: '', 
  }
  constructor(props){
    super(props)
    products = this.props
  }

  addQuantity = (pos) => {
   if(this.props.addCalc(pos)){
     return true

   }
}
  subQuantity = (pos) => {
   if(this.props.subCalc(pos)){
     return true
   }
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.conatiner}>
            {this.props.products.map((data, index) => {
              return (
                <View style={styles.card} key={index}>
                  <Image source={data.image} style={{ width: 70, height: 70 }} />
                  <View
                    style={{ display: 'flex', flexDirection: 'column', flex: 1, slefAlign: 'strech', marginLeft: 15, marginTop: 5 }}>
                    <Text style={styles.card_title}>{data.name}</Text>
                    <Picker
                      selectedValue={this.state.washType}
                      style={styles.card_pickup}
                      onValueChange={(itemValue, itemIndex) => this.setState({ washType: itemValue })}>
                      <Picker.Item label="Wash" value="wash" />
                      <Picker.Item label="Wash & Iron" value="wash and iron" />
                      <Picker.Item label="Iron" value="iron" />
                      <Picker.Item label="Wash & Fold" value="washandfold" />
                    </Picker>
                    <Text style={styles.card_amount}>${data.charge}</Text>
                  </View>
                  <View style={styles.count}>
                    <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
                      <Text style={{ fontWeight: 'bold', marginBottom: 5, color: '#b1adb7' }}>x{data.totalCount}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                      <Button buttonStyle={[{ backgroundColor: '#b1adb7' }, styles.decbtn]} onPress={e => this.subQuantity(index)} title="-" />
                      <Button buttonStyle={styles.btn} onPress={e => this.addQuantity(index)} title="+" />
                      
                    </View>
                  </View>
                </View>
              )
            })}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conatiner: {
    marginTop: 10,
    marginLeft: 2,
    width: width
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
  count: {
    display: 'flex',
    flexDirection: 'column'
  },
  decbtn: {
    padding: 8,
    marginRight: 5,
    borderRadius: 3,
    borderColor: '#b4b0b9',
    borderWidth: 1,
    height: 30,
    backgroundColor: '#b4b0b9'
  },
  btn: {
    padding: 8,
    backgroundColor: '#00b5f5',
    marginRight: 5,
    borderRadius: 3,
    borderColor: '#00b5f5',
    borderWidth: 1,
    height: 30
  },
  card_title: {
    fontWeight: 'bold'
  },
  card_pickup: {
    marginTop: -10,
    marginLeft: -8,
    width: 130,
    color: '#b4b0b9'
  },
  card_amount: {
    marginTop: -10,
    color: '#00b5f5',
    fontWeight: '600',
    fontSize: 15
  }
})