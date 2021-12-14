import React, { useEffect, useState } from 'react'
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { styles } from './style'
export const GifList = ({navigation}) => {
  const [data, setData] = useState([])
const [favorite, setFavorite] = useState(false)
  const fetchApi = async () => {
    try {
      const result = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=7HXUru58nfzAjvDg4TeTy6Cnad3pP8uf&limit=25&rating=g')
      setData(result.data.data)
      console.log('utlslslsl', result.data.data)
    } catch (err) {
      console.log('err', err)
    }
  }
  const goTODetailsPage = (item) =>{
    navigation.navigate('gifDetails', {item:item})
  }
  const toogleFavorite = () =>{
    setFavorite(!favorite)
  }
  const renderGifList = (item, index) => {
    console.log('dadad', item.item.title)
    // console.log('descrp', item.item.images.user.description)
    console.log('details',item?.item?.user?.description)
    console.log('username',item?.item?.user?.username)
    console.log('username',item?.item?.user?.banner_image)
    return (
      <View style={styles.itemStyle}>
        <View>
          <TouchableOpacity onPress={() =>{goTODetailsPage(item.item)}}>
            <Image
              source={{ uri: item.item.images.original.url }}
              style={styles.gifImges} />
              {/* <Image source={require('../../assets/images/7IsD.gif')}/> */}
          </TouchableOpacity>
        </View>
        <View style={styles.gifAndImgWrapper}>
            <View style={styles.gifImgName}>
              <Text ellipsizeMode='tail' style={styles.giFNameText} numberOfLines={2}>{item.item.title}</Text>
            </View>
          <TouchableOpacity onPress={toogleFavorite}>
            <View style={styles.imgWrapper}>
             {favorite === true ? <Image source={require('../../assets/images/HEART_FILLED.png')} style={styles.favroiteIcon} /> :
             <Image source={require('../../assets/images/HEART.png')} style={styles.favroiteIcon} />
             } 
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderGifList}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  )
}