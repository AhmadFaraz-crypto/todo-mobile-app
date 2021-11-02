import React from 'react';
import {Container} from 'native-base';
import {TouchableOpacity, View, Image} from 'react-native';

// components
import {Header, Footer, Text} from 'src/components';
import {Layout, Gutters, Global, Images} from 'src/theme';

// styles
import styles from './styles';

const Location = props => {
  const {row} = Layout;
  const {primaryBg} = Global;
  const {
    regularLPadding,
    mediumTPadding,
    regularLMargin,
    tiny5xHPadding,
    tiny5xHMargin,
    regularTMargin,
  } = Gutters;
  const {heading, headingText, subHeadingText, checkIcon} = styles;
  const incomplete = [
    {
      heading: 'Pustegränd, Stockholm, SE',
      subHeading: '59.3293° N, 18.0686° E',
    },
    {
      heading: 'Pustegränd, Stockholm, SE',
      subHeading: '59.3293° N, 18.0686° E',
    },
  ];

  const incompleteItem = (item, i) => (
    <View key={i} style={[row, regularTMargin]}>
      <Image source={Images.lollyPop} style={checkIcon} />
      <View>
        <Text
          color="quinary"
          text={item.heading}
          font="Medium"
          style={[regularLMargin, headingText]}
        />
        <Text
          color="senary"
          text={item.subHeading}
          font="Medium"
          style={[regularLMargin, subHeadingText]}
        />
      </View>
    </View>
  );

  return (
    <>
      <Container style={primaryBg}>
        <Header title="Location" />
        <View style={regularLPadding}>
          <TouchableOpacity>
            <Text
              text="+ Check In"
              color="quinary"
              font="Bold"
              style={[heading, mediumTPadding]}
            />
          </TouchableOpacity>
          <Text
            text="Current Location"
            color="quinary"
            font="Bold"
            style={[heading, mediumTPadding]}
          />
          {incomplete.map((item, i) => incompleteItem(item, i))}
        </View>
        <Text
          text="Previous Location"
          color="quinary"
          font="Bold"
          style={[heading, tiny5xHMargin, mediumTPadding]}
        />
        <View style={tiny5xHPadding}>
          {incomplete.map((item, i) => incompleteItem(item, i))}
        </View>
      </Container>
      <Footer activeRoute="Location" navigation={props.navigation} />
    </>
  );
};

export default Location;
