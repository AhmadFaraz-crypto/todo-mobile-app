import React from 'react';

// components
import {SafeAreaView, StatusBar} from 'react-native';
import {View} from 'native-base';
import Text from '../Text';

// styles
import styles from './styles';
import {Colors} from 'src/theme';

const Header = ({title, body, left, right, color = 'primary', style}) => {
  const {header, leftStyle, bodyStyle, titleText, rightStyle} = styles;

  return (
    <SafeAreaView style={styles[color]}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <View style={[header, style && style, styles[color]]}>
        <View style={leftStyle}>{left}</View>
        <View style={bodyStyle}>
          {title && (
            <Text
              text={title}
              font="SemiBold"
              style={[titleText, styles[`${color}Text`]]}
            />
          )}
          {body && body}
        </View>
        <View style={rightStyle}>{right}</View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
