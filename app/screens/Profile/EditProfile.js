import React from 'react'
import { Text,View,ScrollView,StyleSheet,Dimensions,KeyboardAvoidingView,TextInput,Image } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Constants, Permissions, ImagePicker } from 'expo';

const { width } = Dimensions.get("window");
const {height} =  Dimensions.get('window').height

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};


export default class EditProfile extends React.Component{
  static navigationOptions = { header: null }
  constructor(props){
    super(props);
    this.state={
      image: 'http://www.schwarzkopf.international/content/dam/schwarzkopf/international/en/brands/men_perfect/home/thumbnails/men_perfect_com_thumbnails_home_pack_400x400.jpg',
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  _cameraImage = async () => {
    const permissions = Permissions.CAMERA;
    const { status } = await Permissions.askAsync(permissions);
    
    console.log(permissions, status);
    if(status === 'granted') {
      let image = await ImagePicker.launchCameraAsync({
        mediaTypes: 'Images',
        allowsEditing: true,
        aspect: [4, 3],
      })
      if (!image.cancelled) {
        this.setState({ image: image.uri });
      }
    }
  };
  render() {

    let { image } = this.state;
    return(
      <View style={{backgroundColor: '#f8f8f8',flex:1}}>
        <View style={styles.header}>
          <Button 
            buttonStyle={styles.head_btn}
            icon={
            <Icon
              name="close"
              size={18}
              color="#706f70d9"
            />
          }/>
          <Text style={styles.head_text}>Edit Profile</Text>
          <Button 
          buttonStyle={styles.head_btn}
          icon={
            <Icon
              name="check"
              size={18}
              color="#706f70d9"
            />
          }/>
        </View>
        <ScrollView >
          <View style={{marginTop:10}}>
            <View style={{alignItems:'center',marginTop:10}}>
              <Image source={{uri: this.state.image}} style={styles.profile_icon} />
            </View>
            <View 
              style={styles.image_icons}>
              <Button  
                onPress={this._pickImage}
                buttonStyle={{backgroundColor:'transparent'}}
                icon={
                  <Icon 
                    color="#706f70d9"
                    size={18}
                    name="file"
                  />
                }
              />
              <Button  
                onPress={this._cameraImage}
                buttonStyle={{backgroundColor:'transparent',marginLeft:5}}
                icon={
                  <Icon 
                    color="#706f70d9"
                    size={18}
                    name="camera"
                  />
                }
              />
            </View>
          </View>
          <KeyboardAvoidingView behavior="position" enabled>
            <View style={{ marginTop: 20 }}>
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
            </View> 
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fcfcfc",
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    padding: 8,
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
  head_text:{
    fontWeight:'600',
    alignItems: 'center', 
    fontSize:18,
    marginLeft: 10 ,
    alignSelf:'stretch', 
    flex: 1,
    marginTop: 5
  },
  head_btn:{
    backgroundColor:'transparent'
  },
  profile_icon: {
    borderRadius: 100,
    width: 100,
    height: 100
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
  image_icons: {
    display:'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center', 
    marginTop:8
  }
})