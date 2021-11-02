import { StyleSheet } from 'react-native';

// styles
import { Colors } from 'src/theme';

export default StyleSheet.create({
  primary: {
    color: Colors.white,
  },
  primaryBg: {
    backgroundColor: Colors.black,
  },
  secondary: {
    color: Colors.primary,
  },
  secondaryBg: {
    backgroundColor: Colors.white,
  },
  button: {
    height: 51,
    borderRadius: 100,
  },
  disabledStyle: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
  },
  borderStyle: {
    borderWidth: 1,
    shadowColor: 'transparent',
  },
});
