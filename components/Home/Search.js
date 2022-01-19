import { View, Text, StyleSheet,TextInput } from 'react-native';
import React from 'react';
import { AntDesign,Ionicons } from '@expo/vector-icons';

const Search = () => {
  return (
    <View style={styles.searchWrapper}>
      <View style={styles.search}>
        <AntDesign name="search1" size={20} color="black" />
          <TextInput style={styles.searchtext} placeholder='Search trash spots and events' />   
     </View>
    </View>
  );
};
 const styles= StyleSheet.create({
    searchWrapper: {
        alignItems:"center"
    },
    search: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "white",
        elevation: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        width: "87%",
        borderRadius: 13,
        
    },
    searchtext: {
        
        fontSize: 17,
        color: "#afafb1",
    }
 })

export default Search;
