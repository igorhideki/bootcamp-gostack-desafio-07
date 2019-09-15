import React, { Component } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddToCart = product => {
    const { navigation, addToCart } = this.props;

    addToCart(product);
    navigation.navigate('Cart');
  };

  render() {
    const { products } = this.state;
    const { cartSize } = this.props;
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
              <ProductButton onPress={() => this.handleAddToCart(item)}>
                <ProductButtonIcon>
                  <Icon name="shopping-basket" color="#fff" size={18} />
                  <Text style={{ color: '#fff' }}> 1</Text>
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
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home);
