import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { GifList } from '../../components/gifList/index'
import Icon from 'react-native-vector-icons/Ionicons'
export const GifListScreen = ({ navigation }) => {
    return (

        <View style={styles.constainer}>
            <View style={styles.containerWrapper}>
                <View style={styles.headerWrapper}>
                    <View style={styles.textHeading}>
                        <Text style={styles.textColor}>MIND BOWSER</Text>
                    </View>
                    <View style={styles.iconAndImg}>
                        <TouchableOpacity onPress={() => {navigation.navigate('Search')}}>
                            <View style={styles.iconContainer}>
                                <Icon name="search" size={30} color={'white'} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>{navigation.navigate('Favorites')}}>
                            <View style={styles.heartImg}>
                                <Image source={require('../../assets/images/HEART_FILLED.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <GifList navigation={navigation} />
            </View>
        </View>

    )
}