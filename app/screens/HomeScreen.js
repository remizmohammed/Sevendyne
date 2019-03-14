import React from "react";
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from "react-native";
import { Button } from "react-native-elements";
import Carousal from "../components/ux/Carousal";
import Card from "../components/ux/Card";
import Icon from "react-native-vector-icons/FontAwesome";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

const { width } = Dimensions.get("window");
const CardWidth = width - width / 2 - 10;
const orderWidth = width - 20;
const images = [
  { source: require("../assets/images/slider/1.jpg") },
  { source: require("../assets/images/slider/2.jpg") },
  { source: require("../assets/images/slider/3.jpg") },
  { source: require("../assets/images/slider/4.jpg") },
  { source: require("../assets/images/slider/5.jpg") }
];

export default class HomeScreen extends React.Component {
  static navigationOptions = { header: null };
  state = {
    service: [
      {
        title: "Wash",
        description: "Min 8 Hours",
        icon: require("../assets/images/icons/wash.png")
      },
      {
        title: "Iron",
        description: "Min 8 Hours",
        icon: require("../assets/images/icons/iron.png")
      },
      {
        title: "Dry Clean",
        description: "Min 8 Hours",
        icon: require("../assets/images/icons/dry.png")
      },
      {
        title: "Wash & Fold",
        description: "Min 8 Hours",
        icon: require("../assets/images/icons/fold.png")
      }
    ],
    orderCount: 2,
    datepickevisible: false,
    pickupdate: "",
    deliverydate: "",
    orders: [
      {
        orderNum: "Order No: 4834983749873897",
        status: "Confirm",
        icon: "check"
      },
      {
        orderNum: "Order No: 4834983749873897",
        status: "Pending",
        icon: "clock-o"
      }
    ]
  };
  _renderProfileScreen = () => {
    this.props.navigation.navigate('Profile')
  }
  _renderBooking = () => {
    this.props.navigation.navigate("Booking");
  };
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
  _handledeliveryDate = data => {
    this.setState({ 
      datepickevisible: false,
      deliverydate: moment(data).format("MMM Do YY")
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.profile}>
            <View>
              <Button 
                buttonStyle={{backgroundColor:'transparent', width: 30,height: 30 }}
                onPress={this._renderProfileScreen}
                icon={
                  <Image
                    style={{
                      borderColor: "#000",
                      borderRadius: 100,
                      width: 30,
                      height: 30
                    }}
                    source={require("../assets/images/user.jpeg")}
                  />
                }
              />
            </View>
            <View
              style={{
                marginLeft: 15,
                marginTop: 7,
                flex: 1,
                alignSelf: "stretch"
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#706f70" }}>
                Hashim Ea
              </Text>
            </View>
            <View style={{ textAlign: "right" }}>
              <Button
                buttonStyle={{ backgroundColor: "transparent" }}
                icon={<Icon name="power-off" color="#00b5f5" size={15} />}
              />
            </View>
          </View>
          <Text style={styles.home_head}>Explore</Text>
          <View>
            <Carousal images={images} />
          </View>
          <View style={{ marginTop: 10 }}>
            <View style={styles.service_head}>
              <Text style={styles.home_head}>Services</Text>
              <Text style={styles.view_btn} onPress={this._renderBooking}>
                View all
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: width,
                flexWrap: "wrap"
              }}
            >
              {this.state.service.map(data => {
                return (
                  <Card
                    width={CardWidth}
                    title={data.title}
                    description={data.description}
                    icons={data.icon}
                  />
                );
              })}
            </View>
            {/* Booking */}
            <View style={styles.order_date}>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "#ddd",
                  width: 150,
                  padding: 3
                }}
              >
                <Text style={{ marginBottom: 10, color: "#00000080" }}>
                  Pick Up
                </Text>
                <TouchableOpacity
                  style={{ display: "flex", flexDirection: "row" }}
                  onPress={this._showDateTimePicker}
                >
                  <View style={{ marginBottom: 10 }}>
                    <Icon color="#00b5f5" size={20} name="calendar" />
                  </View>
                  <Text style={{ marginLeft: 15, color: "#00000080" }}>
                    {this.state.pickupdate}
                  </Text>
                </TouchableOpacity>
                <DateTimePicker
                  isVisible={this.state.datepickevisible}
                  onConfirm={this._handlepickupDate}
                  onCancel={this._hideDateTimePicker}
                />
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "#ddd",
                  width: 150,
                  padding: 3,
                  marginLeft: 20
                }}
              >
                <Text style={{ marginBottom: 10, color: "#00000080" }}>
                  Delivery
                </Text>
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
                  onConfirm={this._handledeliveryDate}
                  onCancel={this._hideDateTimePicker}
                />
              </View>
            </View>
            <Button
              buttonStyle={{
                marginTop: 20,
                backgroundColor: "#00b5f5e6",
                width: orderWidth
              }}
              title="Book Now"
              onPress={this._renderBooking}
            />

            {/* Oreders */}
            <View style={{ marginTop: 30, marginBottom: 20 }}>
              <View style={{ display: "flex" }}>
                <Text style={styles.order_head}>
                  Active Orders({this.state.orderCount})
                </Text>
                <Text style={styles.seeall_btn} onPress={this._renderBooking}>
                  View all
                </Text>
              </View>
              {this.state.orders.map(data => {
                return (
                  <View style={styles.card}>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      <View
                        style={{
                          backgroundColor: "#00b5f5e6",
                          borderRadius: 100
                        }}
                      >
                        <Button
                          buttonStyle={styles.iconStyle}
                          icon={
                            <Icon color="#fff" size={20} name={data.icon} />
                          }
                        />
                      </View>
                      <View style={{ marginLeft: 20 }}>
                        <Text style={styles.card_title}>{data.orderNum}</Text>
                        <Text style={styles.card_desc}>{data.status}</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 3,
    backgroundColor: "#f8f8f8"
  },
  profile: {
    backgroundColor: "#fcfcfc",
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    padding: 10
  },
  home_head: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 7,
    color: "#706f70"
  },
  home_head_desc: {
    marginTop: 7,
    color: "rgb(173, 177, 183)"
  },
  order_head: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold"
  },
  service_head: {
    color: "#00b5f5",
    display: "flex",
    flexDirection: "row",
    width: width
  },
  view_btn: {
    textAlign: "right",
    alignSelf: "stretch",
    flex: 1,
    marginTop: 17,
    marginRight: 20,
    color: "rgb(173, 177, 183)"
  },
  seeall_btn: {
    textAlign: "right",
    alignSelf: "stretch",
    flex: 1,
    marginTop: -30,
    marginRight: 10,
    color: "rgb(173, 177, 183)"
  },
  card: {
    height: 60,
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
  },
  card_title: {
    fontWeight: "600"
  },
  card_desc: {
    color: "#00b5f5e6"
  },
  order_date: {
    marginTop: 20,
    marginLeft: 15,
    display: "flex",
    flexDirection: "row"
  },
  deliverydate: {
    flex: 1,
    alignSelf: "stretch"
  }
});
