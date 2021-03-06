import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput,Button,Image} from 'react-native';

export default class Login extends Component{

    render(){
        return(
            <View style={styles.container}> 
                <Text style={styles.title}>Login</Text>

                <Image
                    style={{width: 250, height: 250,marginLeft:90,marginTop:30}}
                    source={require('./fotodinda.jpg')}
                />
                
                <TextInput
                    style={{height: 40,marginTop:50}}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({text})}
                />

                <TextInput
                    style={{height: 40}}
                    placeholder="Password"
                    onChangeText={(text) => this.setState({text})}
                />

                <Button style ={{margin: 20,flexDirection: 'row',justifyContent: 'space-between'}}
                title="Login"
                color="#841584"
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:3,
    },

    title: {
        fontWeight: 'bold',
        fontSize : 48,
        color:'black',
        alignItems:"center",
        marginTop:100,
        textAlign:'center'
    },
 



})