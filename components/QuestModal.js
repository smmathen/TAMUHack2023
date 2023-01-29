import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';


export default function QuestModal() {
    return (
        <TouchableOpacity disabled={true} style={styles.container}>
            <View style={styles.modal}></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        height: 150,
        width: 200,
        paddingTop: 10,
        backgroundColor: '#F48484',
        borderRadius: 10,

    }
})