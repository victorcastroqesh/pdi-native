import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const ConfigScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');

  const handleStartGame = () => {
    navigation.navigate('Game');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuração de Nomes</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Jogador X"
        value={playerX}
        onChangeText={text => setPlayerX(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do Jogador O"
        value={playerO}
        onChangeText={text => setPlayerO(text)}
      />
      <Button title="Iniciar Jogo" onPress={handleStartGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: 200,
  },
});

export default ConfigScreen;
