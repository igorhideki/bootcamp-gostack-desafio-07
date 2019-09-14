import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './pages/Home';
import Cart from './pages/Cart';
import HeaderCart from './components/HeaderCart';
import logo from './assets/logo.png';

Icon.loadFont();

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerLayoutPreset: 'left',
      headerBackTitleVisible: false,
      defaultNavigationOptions: ({ navigation }) => ({
        headerTitle: (
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.8}
          >
            <Image style={{ marginHorizontal: 20 }} source={logo} />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: '#141419',
          elevation: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: '#FFF',
        headerLeft: null,
        headerRight: <HeaderCart />,
      }),
    }
  )
);

export default Routes;
