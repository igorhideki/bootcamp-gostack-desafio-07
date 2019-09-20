import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { CartIndicator, CartBadge, CartBadgeText } from './styles';

export default function HeaderCart({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

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

HeaderCart.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
