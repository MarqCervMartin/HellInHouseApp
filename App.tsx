import React from 'react';

//Navigation
import {NavigationContainer} from '@react-navigation/native';

//Drawer stack
import Drawer from './src/navigation/stackDrawer';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
