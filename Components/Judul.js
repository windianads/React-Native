/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Judul extends Component {
  render() {
    return (
      <View>
        <Text style={styles.tulisan}>BIODATA</Text>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  tulisan: {
    backgroundColor: 'pink',
    fontSize: 50,
    textAlign: 'center',
  },
});
