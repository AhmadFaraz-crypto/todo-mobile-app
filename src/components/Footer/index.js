import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {Footer as NBFooter, FooterTab} from 'native-base';

// components
import Text from '../Text';
import {Global, Gutters, Images} from 'src/theme';

// styles
import styles from './styles';

const configs = [
  {
    route: 'Task',
    text: 'Task',
    active: Images.activeTask,
    inActive: Images.inActiveTask,
  },
  {
    route: 'NewTask',
    text: '',
    active: Images.addTask,
  },
  {
    route: 'Location',
    text: 'Location',
    active: Images.activeLocation,
    inActive: Images.inActiveLocation,
  },
];

const Footer = ({activeRoute, navigation: {navigate, replace}}) => {
  const {footer, footerTab, touch, plusIcon, sideIcon, iconText} = styles;
  const {galleryBg, borderDustyGray} = Global;
  const {smallTMargin} = Gutters;

  const onPress = route => {
    if (activeRoute === 'Task') {
      navigate(route);
    } else {
      replace(route);
    }
  };

  return (
    <NBFooter style={footer}>
      <FooterTab style={[footerTab, galleryBg, borderDustyGray]}>
        {configs.map((screen, i) => (
          <TouchableOpacity
            key={i}
            style={touch}
            onPress={() => onPress(screen.route)}>
            {!screen.text ? (
              <>
                <Image style={plusIcon} source={screen.active} />
              </>
            ) : (
              <>
                <Image
                  style={[smallTMargin, sideIcon]}
                  source={
                    activeRoute === screen.route
                      ? screen.active
                      : screen.inActive
                  }
                />
                <Text
                  text={screen.text}
                  font="Bold"
                  color={
                    activeRoute === screen.route ? 'quaternary' : 'septenary'
                  }
                  style={[iconText, smallTMargin]}
                />
              </>
            )}
          </TouchableOpacity>
        ))}
      </FooterTab>
    </NBFooter>
  );
};

export default Footer;
