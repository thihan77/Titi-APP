import React from 'react';
import { StyleSheet, Text, View,Button,Alert, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold'}}> Thihan Gamage</Text>
       <Text style={{color: 'blue'}}> 99</Text>

 <Image
          style={{width: 300, height: 300}}
          source={{uri: 'https://mir-s3-cdn-cf.behance.net/user/276/a9c7bd355893955.5cd746bcb250f.jpg'}}
        />
<Text>My name is Thihan, Im a student at AMDT. This is my mobile app project</Text>
      <Button
          title="Press me"
          onPress={() => Alert.alert('Thihan Gamage')}

        />

        <Image
          style={{width: 50, height: 50}}
          source={require('@expo/snack-static/react-native-logo.png')}
        />
         <Text style={{fontWeight: 'bold'}}>
      CYKA_
        <Text style={{color: 'red'}}>
        THIHAN
        </Text>
      </Text>
      </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    
  },
  
});
