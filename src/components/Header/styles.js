import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  primary: {backgroundColor: Colors.white},

  secondary: {backgroundColor: Colors.white},

  transparent: {backgroundColor: 'transparent'},

  primaryText: {color: Colors.black},

  header: {
    borderBottomWidth: 0,
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    elevation: 0,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },

  titleText: {
    fontSize: 30,
    lineHeight: 36,
  },

  leftStyle: {
    width: 50,
  },

  bodyStyle: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightStyle: {
    width: 50,
  },
});
