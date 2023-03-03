import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'

import CarDetailsScreen from '../screens/CarDetailsScreen';
import Notifications from '../screens/Notifications';

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name='CarDetails' component={CarDetailsScreen}/>
    <Drawer.Screen name='Notifications' component={Notifications} />
  </Drawer.Navigator>
);

export default AppNavigator;