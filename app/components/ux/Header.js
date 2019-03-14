import React from 'react'
import {View,Text, StyleSheet, Image,Dimensions } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get("window");
export default class Header extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    const {cartIcon, homeIcon,cartNum} = this.props
    return(
      <View style={styles.container}>
       <View style={{width:width/2, display: 'flex', flexDirection:'row'}}>
       <Button 
          buttonStyle={{width: 40,backgroundColor: 'transparent',marginLeft:10}} 
          icon={
            <Image
            style={{
              borderRadius: 100,
              width: 30,
              height: 30,
              marginRight:10
            }}
            source={require("../../assets/images/user.jpeg")}
          />
          }
        />
        <View style={{ marginLeft: 7,marginTop: 13}}>
          <Text style={{ fontWeight: "bold", color: "#706f70" }}>
            Hashim Ea
          </Text>
        </View>
       </View>
       <View style={{width: width/6}}></View>
       <View style={{width: width/6}}>
          <Text style={{top: -5,left: 40,position: 'absolute',fontSize: 15,color: '#00b5f5' }}>{cartNum}</Text>
          <Button 
            buttonStyle={{width: 40,backgroundColor: 'transparent',marginLeft:23,}} 
            icon={
              <Icon 
                name={cartIcon}
                size={28}
                color="#000000b8"
              />
            }
          />
       </View>
       <View style={{width: width/6}}>
          <Button
            buttonStyle={{width: 40,backgroundColor: 'transparent'}} 
            icon={
              <Icon 
                name={homeIcon}
                size={28}
                color="#000000b8"
              />
            }
          />
       </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fcfcfc",
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    padding: 3,
    width: width,
    display:'flex',
    flexDirection:'row',

    borderWidth: 1,
    borderColor: "#ddd",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderTopColor: '#fff',
    shadowColor: "#ddd",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  btn:{
    backgroundColor:'transparent'
  }
})