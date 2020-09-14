import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet, Dimensions } from 'react-native';

const InformationScreen = () => {
    const wdth = Dimensions.get('window').width;
    return(
        <ScrollView style={styles.container}>
            <View  style={{height:20}}/>
            <View style={styles.imageContainer}>
                <Image style={{width: '100%', height: ( wdth * 90 ) / 1029, borderRadius: 10}} source={require('../assets/images/about/fotter.jpg')}/>
            </View>
            <View style={styles.imageContainer}>
                <Image style={{width: '100%', height: ( wdth * 450 ) / 1029, borderRadius: 10}} source={require('../assets/images/about/header.jpg')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textLeft}>Name</Text>
                <Text style={styles.textRight}>Dr. D.P. Singh</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textLeft}>WhatsApp</Text>
                <Text style={styles.textRight}>+91-9013666825</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textLeft}>Email</Text>
                <Text style={styles.textRight}>bharatiyaorganicagritech@gmail.com</Text>
            </View>
            <View  style={{height:40}}/>
        </ScrollView>
    )
}
// 1029*500
// 1029*100

InformationScreen.navigationOptions = {
    headerTitle: 'About Us'
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        width: '90%', 
        marginHorizontal: '5%',
        marginVertical:10, 
        borderRadius: 10, 
        shadowColor: 'black', 
        shadowOpacity: 1, 
        shadowOffset: { width: 2, height: 2 }, 
        shadowRadius: 10, 
        elevation:5
    },
    textContainer: {
        backgroundColor:'white',
        width: '90%', 
        marginHorizontal: '5%',
        alignItems:'center',
        padding:10, 
        marginVertical:10, 
        borderRadius: 10, 
        shadowColor: 'black', 
        shadowOpacity: 1, 
        shadowOffset: { width: 2, height: 2 }, 
        shadowRadius: 10, 
        elevation:5
    },
    textLeft: {
        fontSize:25
    },
    textRight: {
        fontSize: 18
    }
});

export default InformationScreen;
