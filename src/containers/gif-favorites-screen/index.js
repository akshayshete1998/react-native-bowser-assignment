import React from 'react'
import { View, Text } from 'react-native'
import { GifList } from '../../components/gifList'
import {styles} from './style'
export const GifFavoritesScreen = ({ navigation }) => {
    return (
        <View style={styles.constainer}>
            <Text style={styles.textColor}>Gif Favorites</Text>
            <GifList/>
        </View>
    )
}