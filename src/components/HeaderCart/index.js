import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { CartIndicator, CartBadge, CartBadgeText } from './styles';

function HeaderCart({ navigation, cartSize }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      activeOpacity={0.8}
      style={{ marginRight: 20 }}
    >
      <CartIndicator>
        <Icon name="shopping-basket" color="#fff" size={28} />
        <CartBadge>
          <CartBadgeText>{cartSize}</CartBadgeText>
        </CartBadge>
      </CartIndicator>
    </TouchableOpacity>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(HeaderCart);
