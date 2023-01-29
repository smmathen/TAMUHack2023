import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function WardrobeOption(props) {
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text>Boo</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer: {

        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: '#F55050',
        fontSize: 20,
    },
    questContainer: {
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    quest: {
        left: 30,
        bottom: 10,
        color: '#F55050',
        width: '70%',
        fontSize: 24,
    },
    delete: {
        marginLeft: 10,
        bottom: 10
    },
    check: {
        bottom: 20,
        left: 40
    },
});