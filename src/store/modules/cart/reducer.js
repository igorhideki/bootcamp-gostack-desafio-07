function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      if (state.find(product => product.id === action.product.id)) {
        return state.map(product => {
          if (product.id === action.product.id) {
            return { ...product, amount: product.amount + 1 };
          }
          return product;
        });
      }
      return [
        ...state,
        {
          ...action.product,
          amount: 1,
        },
      ];
    case '@cart/REMOVE':
      return state.filter(product => product.id !== action.id);
    case '@cart/UPDATE_AMOUNT':
      if (action.amount < 1) {
        return state;
      }

      return state.map(product => {
        if (product.id === action.id) {
          return { ...product, amount: action.amount };
        }
        return product;
      });
    default:
      return [];
  }
}

export default cart;
