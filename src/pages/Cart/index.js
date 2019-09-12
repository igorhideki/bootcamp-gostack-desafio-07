import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

function Cart() {
  return (
    <Container>
      <CartWrapper>
        <CartList>
          <CartItem>
            <Product>
              <ProductContent>
                <ProductImage
                  source={{
                    uri:
                      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
                  }}
                />
                <ProductInfo>
                  <ProductName>Tênis de Caminhada Leve</ProductName>
                  <ProductPrice>R$123,90</ProductPrice>
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
        </CartList>
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

export default Cart;
