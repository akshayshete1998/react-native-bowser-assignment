import React from "react"
import { View, Text, ImageBackground, TouchableOpacity } from "react-native"
import { styles } from "./style"
import Icon from 'react-native-vector-icons/Ionicons'


export const GifDetails = ({ navigation, item }) => {
  console.log('item', item)
  console.log('imagessssss', item.user?.banner_image)
  console.log('details', item?.item?.user?.description)
  console.log('username', item?.item?.user?.username)
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImg} resizeMode="cover" source={{ uri: item?.user?.banner_image === '' ? 'https://media3.giphy.com/channel_assets/snl/FNmjSGabYyy5.jpg' : item?.user?.banner_image }}>
        <TouchableOpacity>
        <View style={styles.backIcon}>
          <Icon name="ios-arrow-back-outline" size={30} color={'#FFFFFF'} />
        </View>
        </TouchableOpacity>
      </ImageBackground>
      <View>
        <Text style={[styles.textColor, styles.fontColorTitle]}>Username</Text>
        <Text style={styles.textColor}>{item?.user?.username}</Text>
      </View>
      <View style={{marginBottom:30}}>
        <Text style={[styles.textColor, styles.fontColorTitle]}>Description</Text>
        <Text style={styles.textColor}>{item?.user?.description === '' ? 'Lorem ipsum ipsum ipsum ipsum' : item?.user?.description}</Text>
      </View>
   
    </View>
  )
}