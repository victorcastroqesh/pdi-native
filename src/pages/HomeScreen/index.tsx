import React from 'react';
import {Button, ImageBackground, Text, View} from 'react-native';
import {styles} from './style';

function HomeScreen({navigation}: {navigation: any}): React.JSX.Element {
  const image = require('../../assets/images/chessbg2.png');
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Bem Vindo!</Text>
        <Button
          title="Começar!"
          onPress={() => navigation.navigate('Config')}
        />
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;
