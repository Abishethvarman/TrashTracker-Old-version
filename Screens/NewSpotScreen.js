import React from 'react'
import { View, Text, SafeAreaView} from 'react-native'
import AddNewSpot from '../components/NewSpot/AddNewSpot'




const NewSpotScreen = ({navigation}) => {
    return (
        <SafeAreaView  style={{backgroundColor:'black', flex:1}}>
            <AddNewSpot navigation={navigation}/>
            <Text></Text>
        </SafeAreaView>
    )
}

export default NewSpotScreen