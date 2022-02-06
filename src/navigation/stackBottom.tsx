import React, {FC} from 'react';

//Navigation
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

//Screens
import Routes from './stackRoutes';

//Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Enums
import {LabelsNav} from '../shared/labels/Navigation';

const Tab = createMaterialBottomTabNavigator();

const stackBottom: FC = (): JSX.Element => {
  return (
    <Tab.Navigator
      initialRouteName={LabelsNav.NAME_HOME}
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}>
      <Tab.Screen
        name={LabelsNav.NAME_HOME}
        component={Routes.Home}
        options={{
          tabBarLabel: LabelsNav.NAME_HOME,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={LabelsNav.NAME_CHILLIS}
        component={Routes.Chillis}
        options={{
          tabBarLabel: LabelsNav.NAME_CHILLIS,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="chili-mild" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={LabelsNav.NAME_GROWUP}
        component={Routes.GrowUp}
        options={{
          tabBarLabel: LabelsNav.NAME_GROWUP,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="watering-can"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name={LabelsNav.NAME_CONFIGURATION}
        component={Routes.Configuration}
        options={{
          tabBarLabel: LabelsNav.NAME_CONFIGURATION,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="sprout" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default stackBottom;
