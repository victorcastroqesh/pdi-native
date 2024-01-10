import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    fontSize: 60,
    marginBottom: 10,
    color: '#FFFFFF',
    fontFamily: 'Times New Roman',
    textShadowColor: '#585858',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
