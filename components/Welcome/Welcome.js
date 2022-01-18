import React from 'react'
import { View, Text,StyleSheet, Image, TouchableOpacity } from 'react-native'

const Welcome = ({navigation}) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.WelcomeText} >
                    <Text style={Styles.header}>Welcome to Plastic Trash Tracker</Text>
                    <Text style={Styles.SubTitle}>Track the trash where you been </Text>
            </View>
            <Buttons navigation={navigation} />
        </View>
    )
}

const Buttons = ({navigation}) => (
    <View style={Styles.buttonWrapper}>
        <TouchableOpacity onPress={ ()=> navigation.push('SignupScreen')} on style={Styles.SignupButton}>
            <Text style={Styles.ButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ ()=> navigation.push('LoginScreen')} style={[Styles.LoginButton]}>
            <Text style={[Styles.ButtonText,{color:'#708090'}]}>Log In</Text>
        </TouchableOpacity>
    </View>
);
const Styles = StyleSheet.create({
    container: {
        flex:1

    },
    logo: {
        height: 130,
        width: 130,
        resizeMode: "contain",
        marginTop:50
    },
    WelcomeText: {
        marginTop: 30,
        paddingHorizontal:25  
    },
    header: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        
       
    },
    SubTitle: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
        
    },
    buttonWrapper: {
        alignItems: "center",
        marginTop:50,
        marginBottom:30,
        
    },
    LoginButton:{
        backgroundColor:"#00FF7F",
        marginTop:20,
        padding: 10,
        alignItems: "center",
        borderRadius: 7,
        width:"80%"

    },
    SignupButton: {
        marginTop:20,
        backgroundColor: "#00CED1",
        padding: 10,
        alignItems: "center",
        borderRadius: 7,
        width:"80%"
    },
    ButtonText: {
        color: "white",
        fontSize: 20,
        fontWeight:"bold"
    }
})
export default Welcome