import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Container} from 'native-base';

// components
import {Layout, Colors} from 'src/theme';

const SplashScreen = () => {
  const {fill, center} = Layout;
  return (
    <Container style={[fill, center, styles.container]}>
      <Text>Loading...</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});

export default SplashScreen;
