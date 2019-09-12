import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #141419;
`;

export const List = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const Product = styled.View`
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  width: 220px;
  height: 360px;
  margin-right: 15px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #333333;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin-top: 3px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductButton = styled(RectButton)`
  margin-top: auto;
  border-radius: 4px;
  background-color: #7159c1;
  align-items: center;
  height: 42px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductButtonIcon = styled.View`
  background: rgba(0, 0, 0, 0.1);
  height: 100%;
  padding: 12px;
  flex-direction: row;
  justify-content: center;
`;

export const ProductButtonWrapper = styled.View`
  flex: 1;
`;

export const ProductButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`;
