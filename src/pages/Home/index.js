import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import * as cartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  List,
  Product,
  ProductTitle,
  ProductPrice,
  ProductImage,
  ProductButton,
  ProductButtonText,
  ProductButtonIcon,
  ProductButtonWrapper,
} from './styles';
import api from '../../services/api';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((amountSum, product) => {
      return { ...amountSum, [product.id]: product.amount };
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  });

  function handleAddToCart(id) {
    dispatch(cartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <List
        data={products}
        keyExtractor={product => String(product.id)}
        horizontal
        renderItem={({ item }) => (
          <Product>
            <ProductImage source={{ uri: item.image }} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <ProductButton onPress={() => handleAddToCart(item.id)}>
              <ProductButtonIcon>
                <Icon name="shopping-basket" color="#fff" size={18} />
                <Text style={{ color: '#fff', marginLeft: 4 }}>
                  {' '}
                  {amount[item.id] || 0}
                </Text>
              </ProductButtonIcon>
              <ProductButtonWrapper>
                <ProductButtonText>Adicionar</ProductButtonText>
              </ProductButtonWrapper>
            </ProductButton>
          </Product>
        )}
      />
    </Container>
  );
}
