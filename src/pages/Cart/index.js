import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
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
                <RemoveProductButton onPress={() => removeFromCart(item.id)}>
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

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
