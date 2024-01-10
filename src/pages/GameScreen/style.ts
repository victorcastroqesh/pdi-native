import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    margin: 1,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'gray',
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
  },
  buttonTextView: {flex: 1},
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
  title: {fontSize: 24, marginBottom: 10},
  gameRow: {flexDirection: 'row', marginBottom: 10},
  scoreText: {fontSize: 18, marginTop: 10},
  buttonsView: {flexDirection: 'column', marginTop: 20, gap: 5},
  scoreContainer: {marginTop: 20},
  score: {fontSize: 18},
});
