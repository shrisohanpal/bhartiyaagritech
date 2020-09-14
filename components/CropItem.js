import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const Items = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.tile}>
                <TouchableOpacity onPress={() => props.props.navigation.navigate('CropDetails',{ item : props.item })}>
                    <Image style={styles.image} source={props.item.imguri}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        width:'50%',
        alignItems:'center',
        marginVertical:20,
    },
    tile:{
        height:150,
        width:150,
        borderRadius:10,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 10,
        elevation:5
    },
    image: {
        width:150,
        height:150,
        borderRadius:10
    }
})

export default Items;