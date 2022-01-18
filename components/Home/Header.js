import React from 'react'
import { View, Text,Image,StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import { AntDesign,Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const Header = ({navigation}) => {
    return (
       <><View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../assets/trash-for-trade-logo-png.png')}/>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                
                <TouchableOpacity>
                    <View style={styles.readableBadge}>
                        <Text style={styles.unreadableText}>2</Text>
                    </View>
                    <Ionicons name="notifications" size={30} color="black" />
                </TouchableOpacity>  
            </View>
             
        </View>
    
    <View style={styles.headingWrapper}>
        
   </View>
       <View style={styles.searchWrapper}>
           <View style={styles.search}>
           <AntDesign name="search1" size={20} color="black" />
           <TextInput style={styles.searchtext} placeholder='Search trash spots and events' />   
         </View>
    </View>
    </>  
    )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:"space-between",
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:20,
        marginBottom:0
    },
    logo:{
        height:150,
        width:150,
        resizeMode:"contain"
    },
    iconContainer:{
        color:'white',
        flexDirection:'row'
    },
    icons:{
        width:30,
        height:30,
        marginLeft:10,
       
    },
    readableBadge:{
        backgroundColor:"red",
        alignItems:"center",
        position:"absolute",
        left:14,
        bottom:16,
        width:20,
        height:15,
        borderRadius:10,
        justifyContent:"center",
        zIndex:100
    },
    unreadableText:{
        color:"white",
        fontWeight:"400",
        fontSize:10
    },
    headingWrapper: {
        flexDirection: "row",
        paddingLeft: 20,
        paddingTop: 20,
        marginTop:0
    },

    heading: {
        color: "white",
        fontSize: 28,
        paddingRight:5
    },
    searchWrapper: {
        alignItems:"center",
        marginTop:0
    },
    search: {
        alignItems: "center",
        marginTop: 5,
        flexDirection: "row",
        backgroundColor: "white",
        elevation: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        width: "87%",
        borderRadius: 13,
        
    },
    searchtext: {
        
        fontSize: 15,
        color: "#afafb1",
    }

})
export default Header;
