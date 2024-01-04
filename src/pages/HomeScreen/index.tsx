import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './style';

function HomeScreen({navigation}: {navigation: any}): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo!</Text>
      <Button title="Começar!" onPress={() => navigation.navigate('Config')} />
    </View>
  );
}

export default HomeScreen;
