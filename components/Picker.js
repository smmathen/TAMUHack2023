import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";

const Picker = ({ color }) => {
  return (
    <View style={[]}>
      <ColorPicker color={color} thumbSize={40} sliderSize={40} />
    </View>
  );
};

export default Picker;


// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import ColorPicker from 'react-native-wheel-color-picker'

// export default Color = (props) => {
//     return (
//         <View style={[]}>
//         <ColorPicker
//             ref={r => { this.picker = r }}
//             color={this.state.currentColor}
//             swatchesOnly={this.state.swatchesOnly}
//             onColorChange={this.onColorChange}
//             onColorChangeComplete={this.onColorChangeComplete}
//             thumbSize={40}
//             sliderSize={40}
//             noSnap={true}
//             row={false}
//             swatchesLast={this.state.swatchesLast}
//             swatches={this.state.swatchesEnabled}
//             discrete={this.state.disc}
//         />
//         <SomeButton onPress={() => this.picker.revert()} />
//     </View>
//     );
// }
