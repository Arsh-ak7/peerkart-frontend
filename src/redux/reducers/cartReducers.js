import constants from '../constants';

let initialState = {
	cart: [],
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.ADD_TO_CART:
			let alreadyInCart = state.cart.find(
				(item) => item.itemName === action.payload.itemName
			);
			if (alreadyInCart) {
				return {
					...state,
					cart: state.cart.map((item) =>
						item.itemName === action.payload.itemName ? action.payload : item
					),
				};
			} else
				return {
					...state,
					cart: [...state.cart, action.payload],
				};
		case constants.ADJUST_ITEM_QTY:
			let alreadyInCartItem = state.cart.find(
				(item) => item.itemName === action.payload.itemName
			);
			if (alreadyInCartItem) {
				return {
					...state,
					cart: state.cart.map((item) =>
						item.itemName === action.payload.itemName ? action.payload : item
					),
				};
			} else
				return {
					...state,
					cart: [...state.cart, action.payload],
				};
		case constants.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item.itemName !== action.payload),
			};
		case constants.RESET_CART:
			return {
				...state,
				cart: [],
			};
		default:
			return state;
	}
};
