import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

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

function Cart({ cart }) {
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
                <RemoveProductButton>
                  <Icon name="delete" size={28} color="#7159c1" />
                </RemoveProductButton>
              </Product>
              <ProductFooter>
                <ProductActions>
                  <ProductActionsButton>
                    <Icon
                      name="remove-circle-outline"
                      size={22}
                      color="#7159c1"
                    />
                  </ProductActionsButton>
                  <ProductAmount>
                    <ProductAmountText>3</ProductAmountText>
                  </ProductAmount>
                  <ProductActionsButton>
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

export default connect(mapStateToProps)(Cart);
