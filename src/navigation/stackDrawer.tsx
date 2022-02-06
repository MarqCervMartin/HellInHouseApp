import React, {FC} from 'react';
//Navigation
import {createDrawerNavigator} from '@react-navigation/drawer';

//Screens
import Routes from './stackRoutes';

//Stack Navigation
import Bottom from './stackBottom';

//Enums
import {LabelsNav} from '../shared/labels/Navigation';

const Drawer = createDrawerNavigator();

const stackDrawer: FC = (): JSX.Element => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={LabelsNav.NAME_BOTTOM} component={Bottom} />
      <Drawer.Screen name={LabelsNav.NAME_PROFILE} component={Routes.Perfil} />
    </Drawer.Navigator>
  );
};

export default stackDrawer;
