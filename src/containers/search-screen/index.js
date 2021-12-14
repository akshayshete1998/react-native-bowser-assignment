import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Image, FlatList } from 'react-native'
import { styles } from './style'
import axios from 'axios'
export const SearchScreen = ({ navigation }) => {
    const [gifs, setGifs] = useState([]);
    const [term, updateTerm] = useState('');

    const fetchApi = async () => {
        try {
            // const result = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=7HXUru58nfzAjvDg4TeTy6Cnad3pP8uf&q=${term}`)
            // setGifs(result.data)
            const API_KEY = '7HXUru58nfzAjvDg4TeTy6Cnad3pP8uf';
            const BASE_URL = 'http://api.giphy.com/v1/gifs/search';
            const resJson = await fetch(`${BASE_URL}?api_key=${API_KEY}&q=${term}`);
            const res = await resJson.json();
            setGifs(res.data);
            console.log('res',res.data)
        } catch (err) {
            console.log('err', err)
        }
    }
    const onEdit = (text) => {
        updateTerm(text)
        fetchApi()
        console.log('tetxt', text)
    }
    return (
        <View style={styles.constainer}>
            <View>
                <TextInput placeholder='Search Giphy' placeholderTextColor='black' style={styles.inputTextStyle} onChangeText={(text) => {onEdit(text)}} />
            </View>
            <FlatList
                data={gifs}
                renderItem={({ item }) => (
                    <View style={styles.imgView}>
                        <Image
                            resizeMode='contain'
                            style={styles.image}
                            source={{ uri: item.images.original.url }}
                        />
                    </View>
                )

                }
            />
        </View>
    )
}