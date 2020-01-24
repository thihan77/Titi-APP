import * as React from 'react';
import { StatusBar,View,TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  state= {
    inputValue:''
  };
  render() {
    return (
      <LinearGradient colors={['#511259', '#FF1300']} style={{ flex:1 }}>
      <StatusBar barStyle="light-content" />
     <View>
        <TextInput
  style={styles.input}
  placeholder="Thihan Gamage "
  placeholderTextColor={'#fff'}
  multiline={true}      
  autoCapitalize="sentences"
  underlineColorAndroid="transparent"
  selectionColor={'white'}
  maxLength={30}
  returnKeyType="done"
  autoCorrect={false}
  blurOnSubmit={true}
  />
  </View>
</LinearGradient>

    );
  }
}

const styles ={
input:
{
  marginTop: 30,
  paddingTop: 10,
  paddingRight: 15,
  paddingLeft: 15,
  color: 'white',
  fontWeight:'500'
    }
}


