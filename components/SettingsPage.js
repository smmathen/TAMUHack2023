import React from 'react';
import {
    StyleSheet,
    Pressable,
    Text,
    View
} from 'react-native';


export default function SettingsPage() {
    return (
        <View style={styles.all}>
            <Pressable style={styles.button}  >
                <Text style={styles.text}>{"Personal Preferences"}</Text>
            </Pressable>
            <Pressable style={styles.button}  >
                <Text style={styles.text}>{"Terms and Conditions"}</Text>
            </Pressable>
            <Pressable style={styles.button}  >
                <Text style={styles.text}>{"Log Out"}</Text>
            </Pressable>
            <Pressable style={styles.badbut}  >
                <Text style={styles.badtext}>{"DELETE ACCOUNT"}</Text>
            </Pressable>
        </View>

    );

}




const styles = StyleSheet.create({
    all: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 25,
        margin: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#86A3B8',
        margin: 10
    },
    badbut: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        color: 'red',
        margin: 10,
        width: '94%'
    },

    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    badtext: {
        fontSize: 13,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
});

