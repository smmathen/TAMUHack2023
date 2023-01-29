import React from 'react';
import { StyleSheet, Text, View, Image} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

var Accessory = [
    './assets/Sprites/Accessory/bluecap.png',
    './assets/Sprites/Accessory/glasses.png',
    './assets/Sprites/Accessory/greencap.png',
    './assets/Sprites/Accessory/orangecap.png',
    './assets/Sprites/Accessory/pinkcap.png',
    './assets/Sprites/Accessory/purplecap.png',
    './assets/Sprites/Accessory/redcap.png',
    './assets/Sprites/Accessory/whitecap.png',
    './assets/Sprites/Accessory/yellowcap.png'
]

var BodyOutline = [
    './assets/Sprites/BodyOutline/skinB1.png',
    './assets/Sprites/BodyOutline/skinG1.png'
]
    
var Bottom = [
    './assets/Sprites/Bottom/blackpant.png',
    './assets/Sprites/Bottom/blackshort.png',
    './assets/Sprites/Bottom/blackskirt.png',
    './assets/Sprites/Bottom/bluepant.png',
    './assets/Sprites/Bottom/blueshort.png',
    './assets/Sprites/Bottom/blueskirt.png',
    './assets/Sprites/Bottom/graypant.png',
    './assets/Sprites/Bottom/grayshort.png',
    './assets/Sprites/Bottom/grayskirt.png',
    './assets/Sprites/Bottom/khakipant.png',
    './assets/Sprites/Bottom/khakishort.png',
    './assets/Sprites/Bottom/khakiskirt.png',
    './assets/Sprites/Bottom/whitepant.png',
    './assets/Sprites/Bottom/whiteshort.png',
    './assets/Sprites/Bottom/whiteskirt.png'
]

var ExampleFullBodySprite = [
    './assets/Sprites/ExampleFullBodySprite/hackathon_sprite.png',
]

var Hair = [
'./assets/Sprites/Hair/hair1.png',
'./assets/Sprites/Hair/hair2.png',
'./assets/Sprites/Hair/hair3.png',
'./assets/Sprites/Hair/hair4.png',
'./assets/Sprites/Hair/hairB1.png',
'./assets/Sprites/Hair/hairB2.png',
'./assets/Sprites/Hair/hairB3.png',
'./assets/Sprites/Hair/hairB4.png',
'./assets/Sprites/Hair/hairG1.png',
'./assets/Sprites/Hair/hairG2.png',
'./assets/Sprites/Hair/hairG3.png',
'./assets/Sprites/Hair/hairG4.png'
]

var JustEyes = [
    './assets/Sprites/JustEyes/eyes.png'
]

var JustSkin = [
    './assets/Sprites/JustSkin/skin.png'
]

var Shirt = [
'./assets/Sprites/Shirt/a_mshirt.png',
'./assets/Sprites/Shirt/blackshirt.png',
'./assets/Sprites/Shirt/blueshirt.png',
'./assets/Sprites/Shirt/greenshirt.png',
'./assets/Sprites/Shirt/orangeshirt.png',
'./assets/Sprites/Shirt/pinkshirt.png',
'./assets/Sprites/Shirt/purpleshirt.png',
'./assets/Sprites/Shirt/redshirt.png',
'./assets/Sprites/Shirt/tamuhackshirt.png',
'./assets/Sprites/Shirt/whiteshirt.png',
'./assets/Sprites/Shirt/yellowshirt.png'
]

var Shoes = [
'./assets/Sprites/Shoes/blackshoes.png',
'./assets/Sprites/Shoes/blueshoes.png',
'./assets/Sprites/Shoes/grayshoes.png',
'./assets/Sprites/Shoes/greenshoes.png',
'./assets/Sprites/Shoes/orangeshoes.png',
'./assets/Sprites/Shoes/pinkshoes.png',
'./assets/Sprites/Shoes/purpleshoes.png',
'./assets/Sprites/Shoes/redshoes.png',
'./assets/Sprites/Shoes/whiteshoes.png',
'./assets/Sprites/Shoes/yellowshoes.png'
]

var SkinColors = [
    './assets/Sprites/SkinColors/skinColorB1.png',
    './assets/Sprites/SkinColors/skinColorG1.png'
]



export default function WardrobeOption(props) {
    var w = 250
    var h = 250
    return (
        <View style={{ flex: 1, flexDirection:'row', flexWrap:'wrap', justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../assets/Sprites/Accessory/bluecap.png'    )} style={{ width: w, height: h, position: 'relative', bottom: 0}} />
            <Image source={require('../assets/Sprites/Accessory/redcap.png'     )} style={{ width: w, height: h, position: 'relative', bottom: 0}} />
            <Image source={require('../assets/Sprites/Bottom/whitepant.png'     )} style={{ width: w, height: h, position: 'relative', bottom: 0}} />
            <Image source={require('../assets/Sprites/Bottom/blueshort.png'     )} style={{ width: w, height: h, position: 'relative', bottom: 0}} />
            <Image source={require('../assets/Sprites/Bottom/grayskirt.png'    )} style={{ width: w, height: h, position: 'relative', bottom: 0}} />
            <Image source={require('../assets/Sprites/Shirt/a_mshirt.png'       )} style={{ width: w, height: h, position: 'relative', bottom: 0}} />
            <Image source={require('../assets/Sprites/Shirt/tamuhackshirt.png'  )} style={{ width: w, height: h, position: 'relative', bottom: 0}} />
            <Image source={require('../assets/Sprites/Shirt/yellowshirt.png'    )} style={{ width: w, height: h, position: 'relative', bottom: 0}} />
            {/* <Image source={require()} style={{ width: w, height: h, position: 'absolute', bottom: -800}} />
            <Image source={require()} style={{ width: w, height: h, position: 'absolute', bottom: -800}} />
            <Image source={require()} style={{ width: w, height: h, position: 'absolute', bottom: -800}} />
            <Image source={require()} style={{ width: w, height: h, position: 'absolute', bottom: -800}} />
            <Image source={require()} style={{ width: w, height: h, position: 'absolute', bottom: -800}} />
            <Image source={require()} style={{ width: w, height: h, position: 'absolute', bottom: -800}} />
            <Image source={require()} style={{ width: w, height: h, position: 'absolute', bottom: -800}} />
            <Image source={require()} style={{ width: w, height: h, position: 'absolute', bottom: -800}} />
            <Image source={require()} style={{ width: w, height: h, position: 'absolute', bottom: -800}} /> */}
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