import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    Alert,
} from 'react-native';


const SettingsPage = () => (

    <View>
        <View >
            <Button
                title="Personal Preferences"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
                title="Quest Colors"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
                title="Terms and Conditions"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
                title="Logout"
                onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>

    </View>

);

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         marginHorizontal: 16,
//     },
//     top: {
//         backgroundColor: '#F48484',
//         borderWidth: 1,
//         width: 400,
//         height: 100,
//         color: "#fff",
//         justifyContent: "center"
//     },
//     fixToText: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     }
// });

export default SettingsPage;