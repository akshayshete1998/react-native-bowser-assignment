import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { useState } from 'react/cjs/react.development'
import {styles} from './style'

export const SearchText = () => {
    const [searchText, setSearchText] = useState("")
    const [filterData, setFilterData] = useState([])
    const [masterData, setMasterData] = useState([])
    const handleInputValue = (event) => {
        console.log(event)
        setSearchText(event)
    }
    return (
        <View>
            <Text>Search box</Text>
            
        </View>
    )
}