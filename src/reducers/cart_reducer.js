const initialState = {
  total_items: 0,
  total_amount: 0,
  cart: [],
  shipping_fee: 534,
};

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("data")) || initialValue;

export const cart_reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, color, amount, product } = action.payload;

    const tempItem = state.cart.find((i) => i.id === id + color);

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product?.name,
        color,
        amount,
        image: product?.images[0].url,
        price: product?.price,
        max: product?.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === "DELETE_ITEM") {
    const tempCart = state.cart.filter((item) => item.id !== action.payload);
    return {
      ...state,
      cart: tempCart,
    };
  }

  if (action.type === "TOGGLE_CART_ITEM_AMOUNT") {
    const { id, value } = action.payload;

    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === id) {
        if (value === "increase") {
          let newAmount = cartItem.amount + 1;
          if (newAmount > cartItem.max) newAmount = cartItem.max;
          return { ...cartItem, amount: newAmount };
        }
        if (value === "decrease") {
          let newAmount = cartItem.amount - 1;
          if (newAmount < 1) newAmount = 1;
          return { ...cartItem, amount: newAmount };
        }
      }
      return cartItem;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "COUNT_CART_TOTALS") {
    const { total_items, total_amount } = state.cart.reduce(
      (total, cartItem) => {
        const { price, amount } = cartItem;

        total.total_items += amount;
        total.total_amount += amount * price;

        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );

    return { ...state, total_amount, total_items };
  }

  throw new Error(`No matching "${action.type}" - action type `);
};
