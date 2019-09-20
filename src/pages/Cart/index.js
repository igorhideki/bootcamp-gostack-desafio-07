import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';

import * as cartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  CartWrapper,
  CartList,
  CartItem,
  Product,
  ProductContent,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  RemoveProductButton,
  ProductFooter,
  ProductActions,
  ProductActionsButton,
  ProductAmount,
  ProductAmountText,
  Total,
  TotalLabel,
  TotalPrice,
  CheckoutButton,
  CheckoutButtonText,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(cartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(cartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <CartWrapper>
        <CartList
          data={cart}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <CartItem>
              <Product>
                <ProductContent>
                  <ProductImage source={{ uri: item.image }} />
                  <ProductInfo>
                    <ProductName>{item.title}</ProductName>
                    <ProductPrice>{item.priceFormatted}</ProductPrice>
                  </ProductInfo>
                </ProductContent>
                <RemoveProductButton
                  onPress={() => dispatch(cartActions.removeFromCart(item.id))}
                >
                  <Icon name="delete" size={28} color="#7159c1" />
                </RemoveProductButton>
              </Product>
              <ProductFooter>
                <ProductActions>
                  <ProductActionsButton onPress={() => decrement(item)}>
                    <Icon
                      name="remove-circle-outline"
                      size={22}
                      color="#7159c1"
                    />
                  </ProductActionsButton>
                  <ProductAmount>
                    <ProductAmountText>{item.amount}</ProductAmountText>
                  </ProductAmount>
                  <ProductActionsButton onPress={() => increment(item)}>
                    <Icon name="add-circle-outline" size={22} color="#7159c1" />
                  </ProductActionsButton>
                </ProductActions>
                <ProductPrice>{item.subtotal}</ProductPrice>
              </ProductFooter>
            </CartItem>
          )}
        />
        <Total>
          <TotalLabel>Total</TotalLabel>
          <TotalPrice>{total}</TotalPrice>
        </Total>
        <CheckoutButton>
          <CheckoutButtonText>Finalizar Pedido</CheckoutButtonText>
        </CheckoutButton>
      </CartWrapper>
    </Container>
  );
}
