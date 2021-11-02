import {StyleSheet} from 'react-native';
import {Colors} from 'src/theme';

export default StyleSheet.create({
  wrapper: {
    zIndex: 2000,
    backgroundColor: Colors.white,
    paddingRight: 10,
  },
  bgWrapper: {
    backgroundColor: Colors.red,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  heading: {
    fontSize: 18,
    lineHeight: 18,
  },
  headingText: {
    fontSize: 18,
    lineHeight: 24,
  },
  subHeadingText: {
    fontSize: 14,
    lineHeight: 16,
    marginTop: 4,
    marginLeft: 7,
  },
  checkIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  alarmIcon: {
    height: 18,
    width: 15,
    resizeMode: 'contain',
    marginTop: 3,
  },
  delIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginRight: 22,
  },
  modal: {
    width: 343,
    borderRadius: 8,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 30,
    lineHeight: 36,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  subtext: {
    fontSize: 16,
    lineHeight: 19,
    marginTop: 18,
  },
});
