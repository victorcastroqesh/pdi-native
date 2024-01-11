import React from 'react';
import {Button, ImageBackground, Text, View} from 'react-native';
import {styles} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

function HomeScreen({navigation}: {navigation: any}): React.JSX.Element {
  const [hasHistory, setHasHistory] = React.useState(false);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('data');
        const currentData = JSON.parse(savedData as string);
        if (currentData) {
          return setHasHistory(true);
        }
        setHasHistory(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const image = require('../../assets/images/chessbg2.png');
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Bem Vindo!</Text>
        <View style={styles.buttonsView}>
          <Button
            title="Novo Jogo"
            onPress={() => navigation.navigate('Config')}
          />
          {hasHistory && (
            <Button
              title="Continuar Jogo"
              onPress={() => navigation.navigate('Game')}
            />
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;
