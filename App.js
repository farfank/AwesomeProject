import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {Platform} from 'react-native';
import MiTexto from './components/MiTexto'

export default class App extends React.Component {
  
  constructor(){
    super();
    this.state={name:'',greeting:''}
  }

  onChangeText = () => {
    this.setState({
      greeting:"Hello " + this.state.name
    })
  }
  render() {
    return (
      <View style={styles.container}>

      <View style={{flex:3, flexDirection:'column', backgroundColor:'red'}}>
        <Button title="B1" onPress={this.onChangeText}> </Button>
        <Button title="B2" onPress={this.onChangeText}> </Button>
        <Button title="B3" onPress={this.onChangeText}> </Button>
        <Button title="B4" onPress={this.onChangeText}> </Button>
        
        <View style={{flex:1, flexDirection:'row', backgroundColor:'green', justifyContent:'space-between'}}>
          <Button title="B5" onPress={this.onChangeText}> </Button>
          <Button title="B6" onPress={this.onChangeText}> </Button>
          <Button title="B7" onPress={this.onChangeText}> </Button>
          <Button title="B8" onPress={this.onChangeText}> </Button>

        </View>
      </View>

      <View style={{flex:1, flexDirection:'column', backgroundColor:'red'}}>
        <Text style={{fontWeight:'bold',	fontSize:20}}>
          Hola, Type your name			  
        </Text>

        <TextInput style={{fontWeight:'bold',fontSize:20}}
          placeholder="Type your name here"
          onChangeText={(name) =>this.setState({name})}>
          
        </TextInput>

        <Button title="Click me" onPress={this.onChangeText}> </Button>

        <Text style={{fontWeight:'bold', fontSize:20}}>
          {this.state.greeting}
        </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'red',
    marginTop:(Platform.OS) === 'ios' ? 20:20,
  },
});
