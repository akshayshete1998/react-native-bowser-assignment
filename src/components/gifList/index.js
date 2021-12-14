import React, { useEffect, useState } from 'react'
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { styles } from './style'
export const GifList = ({ navigation }) => {
  const [data, setData] = useState([])
  const [favorite, setFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const fetchApi = async () => {
    try {
      setIsLoading(true)
      const result = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=7HXUru58nfzAjvDg4TeTy6Cnad3pP8uf&limit=25&rating=g')
      setData(result.data.data)
      setIsLoading(false)
    } catch (err) {
      console.log('err', err)
    }
  }
  const goTODetailsPage = (item) => {
    navigation.navigate('gifDetails', { item: item })
  }
  const toogleFavorite = () => {
    setFavorite(!favorite)
  }
  const renderGifList = (item, index) => {
    return (
      <View style={styles.itemStyle}>
        <View>
          <TouchableOpacity onPress={() => { goTODetailsPage(item.item) }}>
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
  if (isLoading) {
    return <View style={styles.loadingText}>
      <Text style={styles.textColor}>Loading ...</Text>
    </View>
  }
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