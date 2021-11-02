import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  footer: {
    height: 83,
  },
  footerTab: {
    backgroundColor: Colors.alabaster,
    borderTopColor: Colors.loblolly,
    borderTopWidth: 0.1,
  },
  touch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideIcon: {
    width: 18,
    height: 23,
    resizeMode: 'contain',
  },
  plusIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  iconText: {
    fontSize: 10,
    lineHeight: 10,
  },
  active: {
    color: Colors.primary,
  },
});
