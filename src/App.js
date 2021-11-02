import React, {useState, useEffect} from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from 'react-native-ui-kitten';
import {Provider as ReduxProvider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';

import {Root} from 'native-base';
import {StatusBar} from 'react-native';

import SplashScreen from './screens/Splash';
import {store} from './redux/store';
import NavigatorProvider from './navigator';
import {setupHttpConfig} from './utils/http';
import {Colors} from 'src/theme';

const persistor = persistStore(store);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAssets();
    StatusBar.setBackgroundColor(Colors.white);
  });

  const loadAssets = () => {
    setTimeout(() => {
      setupHttpConfig(setIsLoading);
    }, 500);
  };

  const renderLoading = () => <SplashScreen />;

  const renderApp = () => (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <Root>
            <NavigatorProvider />
          </Root>
        </ApplicationProvider>
      </PersistGate>
    </ReduxProvider>
  );

  return isLoading ? renderLoading() : renderApp();
};

export default () => <App />;
