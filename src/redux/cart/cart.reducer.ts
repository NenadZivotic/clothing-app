import { CollectionItemModel } from "../../models";
import { addItemToCart, removeItemFromCart } from "./cart.utils";
import { CartActionEnum } from "./CartAction.enum";

const INITIAL_STATE: { hidden: boolean; cartItems: CollectionItemModel[] } = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: CollectionItemModel }
): { hidden: boolean; cartItems: CollectionItemModel[] } => {
  switch (action.type) {
    case CartActionEnum.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionEnum.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionEnum.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionEnum.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
