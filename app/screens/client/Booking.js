import * as React from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  ScrollView
} from "react-native";
import { Button } from "react-native-elements";
import Categories from "../../components/Booking/Categories";
import Products from "../../components/Booking/Products";
import Header from "../../components/ux/Header";

const { width } = Dimensions.get("window")

export default class Booking extends React.Component {
  static navigationOptions = { header: null };
  state = {
    products: [
      { name: 'T-shirt', charge: 5, image: require('../../assets/images/products/men/tshirt.png'), totalCount: 0 },
      { name: 'Shirt', charge: 10, image: require('../../assets/images/products/men/shirt.jpg'), totalCount: 0 },
      { name: 'Pant', charge: 5, image: require('../../assets/images/products/men/jeans.png'), totalCount: 0 },
      { name: 'Short', charge: 10, image: require('../../assets/images/products/men/shorts.png'), totalCount: 0 },
      { name: 'Jacket', charge: 8, image: require('../../assets/images/products/men/jacket.jpg'), totalCount: 0 },
      { name: 'T-shirt', charge: 5, image: require('../../assets/images/products/men/tshirt.png'), totalCount: 0 },
      { name: 'Shirt', charge: 9, image: require('../../assets/images/products/men/shirt.jpg'), totalCount: 0 }
    ],
    categories: [
      { name: 'men' }, { name: 'women' }, { name: 'kids' }, { name: 'others' }
    ],
    totalAmount:0,
    totalCount: 0
  };

  _renderConfirm = () => {
    this.props.navigation.navigate("BookingForm");
  };

  addQuantity = (pos) => {
    const orders = this.state.products
    let totalCount = 0
    let totalAmount = 0
    const currentOrder = orders[pos]
    if (currentOrder) {
      currentOrder.totalCount = currentOrder.totalCount + 1
      this.setState({ order: [...orders.slice(0, pos), currentOrder, ...orders.slice(pos + 1)] })
      orders.forEach((item) => {
        totalCount += item.totalCount
        totalAmount += item.totalCount * item.charge
        this.setState({totalCount: totalCount, totalAmount: totalAmount})
    })
  }
}
  subQuantity = (pos) => {
    const orders = this.state.products
    let totalAmount = this.state.totalAmount
    let totalCount = this.state.totalCount
    const currentOrder = orders[pos]
    if(currentOrder.totalCount <= 0) {
      return false
    } else {
      currentOrder.totalCount = currentOrder.totalCount - 1
      this.setState({ order: [...orders.slice(0, pos), currentOrder, ...orders.slice(pos - 1)] }) 
      let amount = totalAmount - currentOrder.charge
      let count  = totalCount - 1
      this.setState({totalCount:count, totalAmount: amount})
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header 
          homeIcon = {'home'}
          cartIcon = {'shopping-cart'}
          cartNum = {this.state.totalCount}
        />
        <ScrollView style={{ padding: 10,}}>
          <View>
            <Text style={styles.booking_head}>Select Clothes</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row' }} >
            {this.state.categories.map(data => {
              return (
                <View>
                  <Categories
                    title={data.name}
                  />
                </View>
              )
            })}
          </View>
          <View>
              <Products 
                products={this.state.products}
                addCalc={this.addQuantity}
                subCalc={this.subQuantity}
              />
          </View>
        </ScrollView>
        <View style={{backgroundColor: '#fff'}}>
          <Text>{this.state.totalAmount}</Text>
          <Button title="Order Now" buttonStyle={styles.order_btn} onPress={this._renderConfirm}  />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8"
  },
  booking_head: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    color: "#706f70",
    marginBottom: 10
  },
  order_btn: {
    backgroundColor:'#00b5f5'
  }
});
