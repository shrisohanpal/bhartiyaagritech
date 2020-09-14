import React, {useState} from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';

const CropDetails = (props) => {
    var data = "";
    const key  = props.navigation.state.key;
    if ( key == "English")
        data = props.navigation.state.params.item.english;
    else
        data = props.navigation.state.params.item.hindi;   
    const itemImg = props.navigation.state.params.item.img2uri;
    return(
        <View style={{flex:1}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image style={{width:Dimensions.get('window').width,height:Dimensions.get('window').width * 500/1028, margin:1}} source={itemImg[0]} />
            <Image style={{width:Dimensions.get('window').width,height:Dimensions.get('window').width * 500/1028, margin:1}} source={itemImg[1]} />
            <Image style={{width:Dimensions.get('window').width,height:Dimensions.get('window').width * 500/1028, margin:1}} source={itemImg[2]} />
        </ScrollView>    
        <ScrollView style={styles.scrollStyle}>
            <Text style={styles.text}>{data}</Text> 
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollStyle: {
        paddingHorizontal:10
    },
    text : {
        fontSize: 20,
    }
});

export default CropDetails;