import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import SignupForm from '../components/SignupScreen/SignupForm'



const SignUpScreen = ({navigation}) => {
    return (
        <View style={styles.Container}>
            <View style={styles.LogoContainer}>
                <Image source={require('../assets/logo.png')} style={styles.Logo}/>
            </View>
            <SignupForm navigation={navigation} />
        </View>
    )
}

const styles=StyleSheet.create({
    Container:{
        backgroundColor:'white',
        flex:1,
        paddingTop:50,
        paddingHorizontal:12

    },
    LogoContainer:{
        alignItems:'center',
        marginTop:60

    },
    Logo:{
        height: 150,
        width: 150,
        resizeMode: "contain",
    }
})
export default SignUpScreen
