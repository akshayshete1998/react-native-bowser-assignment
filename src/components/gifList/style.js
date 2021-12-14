import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    itemStyle: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 200,
        margin: 1,
        flex: 1,
        width: '100%'
    },
    itemBackground: {
        backgroundColor: 'red'
    },
    gifImges: {
        height: 150,
        width: 160,
        resizeMode: 'stretch',
        backgroundColor: 'pink'
    },
    gifAndImgWrapper: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    gifImgName: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    giFNameText:{
        fontSize: 17,
        fontWeight: 'bold',
        color:'#FFFFFF'
    },
    imgWrapper: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40
    },
    favroiteIcon:{
        height:27,
        width:27,
        resizeMode:'stretch'
    }
})