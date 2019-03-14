import React from 'react'
import { View,ScrollView,Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.5

export default class Carousal extends React.Component{
  render() {
    const { images } = this.props;
    if(images && images.length){
      return(
        <View style={styles.scrollContainer}>
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
            {images.map(image=> (
              <Image source={image.source}  style={styles.image}/>
            ))}
          </ScrollView>
        </View>
      )
    }
    console.log('Please provide images');
    return null
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    height
  },
  image: {
    width:width - 12,
    height,
    borderRadius: 10,
    marginTop: 7,
    marginBottom: 0
  },
})