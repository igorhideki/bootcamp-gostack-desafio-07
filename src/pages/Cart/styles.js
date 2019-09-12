import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #141419;
`;

export const CartWrapper = styled.View`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
`;

export const CartList = styled.View``;

export const CartItem = styled.View`
  margin: 10px 0;
`;

export const Product = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductContent = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductInfo = styled.View`
  justify-content: center;
  padding-left: 10px;
`;

export const ProductName = styled.Text`
  font-size: 14px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const RemoveProductButton = styled.TouchableOpacity`
  padding: 2px;
`;

export const ProductFooter = styled.View`
  flex-direction: row;
  background: #eee;
  border-radius: 4px;
  padding: 7px 11px;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const ProductActions = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductActionsButton = styled.TouchableOpacity`
  padding: 2px 3px;
`;

export const ProductAmount = styled.View`
  background: #fff;
  border: 1px solid #ddd;
  padding: 2px 5px;
  width: 50px;
  height: 26px;
  justify-content: flex-end;
`;

export const ProductAmountText = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const Total = styled.View`
  margin: 30px 0;
  align-items: center;
`;

export const TotalLabel = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  color: #999;
  font-weight: bold;
`;

export const TotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-top: 2px;
`;

export const CheckoutButton = styled(RectButton)`
  margin-top: auto;
  border-radius: 4px;
  background-color: #7159c1;
  align-items: center;
  justify-content: center;
  height: 42px;
`;

export const CheckoutButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
