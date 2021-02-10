const reducer = (state, action) => {
  switch(action.type) {
    case 'CLEAR_CART':
      return {...state, cart: []};
    case 'REMOVE':
      const newCart = state.cart.filter(item => item.id !== action.payload);
      return {...state, cart: newCart}
    case 'INCREASE':
      let tempCart = state.cart.map(item => {
        if (item.id === action.payload) {
          return {...item, amount: item.amount +1}
        }
        return item
      })
      return { ...state, cart: tempCart };
    case 'DECREASE':
      let cart = state.cart.map(item => {
        if (item.id === action.payload) {
          return {...item, amount: item.amount - 1}
        }
        return item
      }).filter(item => item.amount !== 0);

      return { ...state, cart };
    case 'GET_TOTALS':
      let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
        cartTotal.total += cartItem.price * cartItem.amount;
        cartTotal.amount += cartItem.amount;
        return cartTotal;
      }, {total: 0, amount:0})
      total = parseFloat(total).toFixed(2);

      return { ...state, total, amount };
    case 'IS_LOADING':
      return { ...state, loading: true };
    case 'DISPLAY_ITEMS':
      return {... state, cart: action.payload, loading: false};
    default:
      return state;
  }
}

export default reducer;