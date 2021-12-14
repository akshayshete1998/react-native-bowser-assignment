import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import {styles} from './style'
import {GifDetails} from '../../components/gifDetails/index'
import { GifList } from '../../components/gifList'
export const GifDetailsScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerWrapper}>
                <ScrollView>
            <Text>GifDetails</Text>
            <GifDetails navigation={navigation} item={route.params.item}/>
            <GifList navigation={navigation}/>
                </ScrollView>
            </View>
        </View>
    )
}