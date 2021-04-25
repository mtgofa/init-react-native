import React,{Component} from 'react';
import {View, Text, Image} from 'react-native';

export default App = () => {
    return (
      <View style={{ flex: 1, padding: 24 }}>
        <Image
            style={{width: 50, height: 50}}
               source={{
                 uri: 'https://reactnative.dev/img/tiny_logo.png',
               }}
             />
        <Text>This is profile page</Text>
      </View>
    );
}