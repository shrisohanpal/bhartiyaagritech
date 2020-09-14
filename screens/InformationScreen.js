import React from 'react';
import { ScrollView, Text, Image, View, StyleSheet, Dimensions } from 'react-native';

const InformationScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={{width: '100%', height: ( Dimensions.get('window').width * 400 ) / 1028, borderRadius: 10}} source={require('../assets/images/cropDetails/t12.jpg')}/>
            </View>
            <Text style={styles.text}>Here will be other Information</Text>
        </View>
    )
}

InformationScreen.navigationOptions = {
    headerTitle: 'Other Information'
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
    text: {
        fontSize:20,
        alignSelf:'center'
    }
});

export default InformationScreen;
