import React from 'react'
import { View, Text } from 'react-native'

export const Loader = () =>{
    return(
<View>
    <Text>Loader</Text>
</View>
    )
}
const App = () => {
    const [data, setData] = useState([])
    const [isloading, setIsLoading] = useState(false)
    const [searchText, setSearch] = useState("")
    const [filterData, setFilterData] = useState([])
    const [masterData, setMasterData] = useState([])
  
    const fetchApi = async () => {
      setIsLoading(true)
      try {
        const result = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=7HXUru58nfzAjvDg4TeTy6Cnad3pP8uf&limit=2&rating=g')
        setData(result.data.data)
        console.log('sasasas',result.data.analytics.title)
        setFilterData(result.data.data)
        setMasterData(result.data.data)
        setIsLoading(false)
      } catch (err) {
        console.log('err', err)
      }
    }
    const handleInputValue = (text) => {
      if (text) {
        const newData = masterData.filter((item) => {
            const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        setFilterData(newData)
        setSearch(text)
    } else {
        setFilterData(masterData)
        setSearch(text)
    }
  }
    useEffect(() => {
      fetchApi()
      console.log('data', data)
    }, [])
    if (isloading) {
      return <Loader />
    }
    return (
      <SafeAreaView>
        <View>
        <TextInput style={styles.searchTextBox} placeholder='Search' value={searchText} onChangeText={(event) => {handleInputValue(event)}} />
        {/* <ScrollView>
          {filterData?.map((value) => (
            <View key={value.id}>
              <Text>aasasaaas {value.images.fixed_height_small.url}</Text>
              <Image
                source={{uri: value.images.fixed_height.url}}
                style={{ width: 100, height: 100 }}/>
            </View>
          ))}
        </ScrollView> */}
             <View>
                  <FlatList
                      data={}
                      renderItem={renderBreakingBadCharacterList}
                      keyExtractor={(item, index) => index.toString()}
                      numColumns={2}
                  />
              </View>
          </View>
      </SafeAreaView>
    );
  };
  
   const styles = StyleSheet.create({
    searchTextBox:{
        // flex:1,
        backgroundColor:'red'
    }
  })