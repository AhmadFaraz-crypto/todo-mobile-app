import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  primaryTheme: {
    borderColor: Colors.darkGray,
    backgroundColor: Colors.lightGray,
  },
  secondaryTheme: {
    borderColor: Colors.white,
    backgroundColor: Colors.white,
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: Colors.white,
  },
  height: {
    height: 50,
  },
  transparentInput: {
    backgroundColor: 'transparent',
    borderColor: Colors.blue,
    color: Colors.white,
    marginHorizontal: 0,
  },
  transparentInputText: {
    color: Colors.white,
  },
  multilineInput: {
    minHeight: 120,
  },
});
