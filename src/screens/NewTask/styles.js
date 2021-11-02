import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  backText: {
    fontSize: 16,
    lineHeight: 19,
  },
  wrapper: {
    borderBottomWidth: 0.5,
    borderColor: Colors.silver,
    paddingTop: 15,
    paddingBottom: 14.5,
    marginBottom: 1,
  },
  descWrapper: {
    paddingBottom: 60,
  },
  input: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  summary: {
    width: 20,
    height: 20,
    marginRight: 12,
    marginTop: 15,
    resizeMode: 'contain',
  },
  multiline: {
    marginBottom: 4,
  },
});
