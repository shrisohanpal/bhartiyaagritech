import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

import { ITEMS } from '../Data';

const HomeScreen = (props) => {

    const CustomButton = (prop) => {
        return(
            <TouchableOpacity onPress={() => props.navigation.navigate(prop.screen,{ item: ITEMS[11]})}>
                <View style={{ width: '90%', height: Dimensions.get('window').width*(250/1029)*0.9, marginHorizontal: '5%', marginVertical:10, borderRadius: 10, shadowColor: 'black', shadowOpacity: 1, shadowOffset: { width: 2, height: 2 }, shadowRadius: 10, elevation:5 }}>
                    <Image style={{width:'100%',height:'100%',borderRadius:10}} source={prop.imgsource} />
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={require('../assets/images/home/banner.jpg')} />
            <Text  style={styles.text} >Menu</Text>
            <CustomButton screen = {'Crops'} imgsource = {require('../assets/images/home/button1.jpg')}/>  
            <CustomButton screen = {'CropDetails'} imgsource = {require('../assets/images/home/button2.jpg')}/>  
            <CustomButton screen = {'About'}       imgsource = {require('../assets/images/home/button3.jpg')}/>         
        </View>
    );
}


HomeScreen.navigationOptions = {
      headerTitle: 'Bharatiya Organic Agritech'
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner:{
        width:'100%',
        height:Dimensions.get('window').width*500/1029,
        borderColor:'black',
        borderWidth:1
    },
    itemsContainer:{
        width: '100%'
    },
    text :{
        fontSize:35,
        alignSelf:'center',
        marginVertical:10
    }
})

export default HomeScreen;