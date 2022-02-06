import React from 'react';

//Navigation
import {NavigationContainer} from '@react-navigation/native';

//Drawer stack
import Drawer from './src/navigation/stackDrawer';

//Redux
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/configureStore';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </Provider>
  );
}
