import React, { useState } from "react";
import { Button, Text, View, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/Ionicons'
import QuestItems from "./components/QuestItems"
import SettingsPage from "./components/SettingsPage"
import FriendsPage from "./components/Friends"

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  var y = -700
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8D2A6' }}>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
      <Image source={require('./assets/day.png')} style={{ width: 900, height: 900, position: 'absolute', bottom: -800}} />
      <Image source={require('./assets/Sprites/JustSkin/skin.png')} style={{ width: 450, height: 450, position: 'absolute', bottom: y}} />
      <Image source={require('./assets/Sprites/BodyOutline/skinG1.png')} style={{ width: 450, height: 450, position: 'absolute', bottom: y}} />
      <Image source={require('./assets/Sprites/Hair/hair1.png')} style={{ width: 450, height: 450, position: 'absolute', bottom: y}} />
      <Image source={require('./assets/Sprites/Shirt/tamuhackshirt.png')} style={{ width: 450, height: 450, position: 'absolute', bottom: y}} />
      <Image source={require('./assets/Sprites/Bottom/whitepant.png')} style={{ width: 450, height: 450, position: 'absolute', bottom: y}} />
      <Image source={require('./assets/Sprites/Shoes/whiteshoes.png')} style={{ width: 450, height: 450, position: 'absolute', bottom: y}} />
    </View >
  );
}

function QuestsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8D2A6' }}>
      <QuestItems />
    </View>
  );
}



function WardrobeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8D2A6' }}>
      <Text>Wardrobe Screen!</Text>
    </View>
  );
}

function FriendsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8D2A6' }}>
      <FriendsPage />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  const [a, setA] = useState("#f2f2f2");

  setTimeout(() => setA("#000000"), 3000);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E8D2A6' }}>
      <SettingsPage />
    </View>
  );
}



const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HOME" component={HomeScreen} options={{ headerShown: false }} />
      {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SETTINGS" component={SettingsScreen} options={{ headerShown: false }} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </SettingsStack.Navigator>
  );
}


const QuestsStack = createNativeStackNavigator();

function QuestsStackScreen() {
  return (
    <QuestsStack.Navigator>
      <QuestsStack.Screen name="QUESTS" component={QuestsScreen} options={{
        headerTintColor: '#F48484',
        headerStyle: { backgroundColor: '#E8D2A6' },
        headerShown: false
      }} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </QuestsStack.Navigator>
  );
}



const WardrobeStack = createNativeStackNavigator();
function WardrobeStackScreen() {
  return (
    <WardrobeStack.Navigator>
      <WardrobeStack.Screen name="WARDROBE" component={WardrobeScreen} options={{ headerShown: false }} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </WardrobeStack.Navigator>
  );
}

const FriendsStack = createNativeStackNavigator();
function FriendsStackScreen() {
  return (
    <FriendsStack.Navigator>
      <FriendsStack.Screen name="FRIENDS" component={FriendsScreen} options={{ headerShown: false }} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </FriendsStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false, tabBarActiveTintColor: '#F55050', tabBarInactiveTintColor: '#86A3B8',
      }}>
        <Tab.Screen name="Home" component={HomeStackScreen} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon3 name="home-outline" color={focused ? "#F55050" : '#86A3B8'} tabBarActiveTintColor={'red'} size={size} />
          )
        }} />
        <Tab.Screen name="Quests" component={QuestsStackScreen} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name="file-text-o" color={focused ? "#F55050" : '#86A3B8'} size={size} />
          )
        }} />

        <Tab.Screen name="Wardrobe" component={WardrobeStackScreen} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon2 name="wardrobe-outline" color={focused ? "#F55050" : '#86A3B8'} size={size} />
          )
        }} />
        <Tab.Screen name="Friends" component={FriendsStackScreen} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon3 name="people-outline" color={focused ? "#F55050" : '#86A3B8'} size={size} />
          )
        }} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icon3 name="settings-outline" color={focused ? "#F55050" : '#86A3B8'} size={size} />
          )
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}