/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/Judul';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Judul/>
        <Image style={styles.gambar} source={require('./fotodinda.jpg')}/>
        <Text style={styles.tulisan}>Nama : Windiana Dinda Sekaryus </Text>
        <Text style={styles.tulisan}>Kelas : XI RPL 2</Text>
        <Text style={styles.tulisan}>No.abs : 37</Text>  
        </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tulisan: {
    fontSize : 15,
  },
  gambar: {
    height: 210,
    width:210,
  },
});
