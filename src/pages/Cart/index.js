import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as cartActions from '../../store/modules/cart/actions';

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

function Cart({ cart, removeFromCart, updateAmount }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
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
                <ProductPrice>R$123,90</ProductPrice>
              </ProductFooter>
            </CartItem>
          )}
        />
        <Total>
          <TotalLabel>Total</TotalLabel>
          <TotalPrice>R$123,90</TotalPrice>
        </Total>
        <CheckoutButton>
          <CheckoutButtonText>Finalizar Pedido</CheckoutButtonText>
        </CheckoutButton>
      </CartWrapper>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
