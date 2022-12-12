import { CollectionItemModel } from "../../models";
import { CartActionEnum } from "./CartAction.enum";

export const toggleCartHidden = () => ({
  type: CartActionEnum.TOGGLE_CART_HIDDEN,
});

export const addItem = (
  item: CollectionItemModel
): { type: CartActionEnum; payload: CollectionItemModel } => ({
  type: CartActionEnum.ADD_ITEM,
  payload: item,
});

export const removeItem = (
  item: CollectionItemModel
): { type: CartActionEnum; payload: CollectionItemModel } => ({
  type: CartActionEnum.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (
  item: CollectionItemModel
): { type: CartActionEnum; payload: CollectionItemModel } => ({
  type: CartActionEnum.CLEAR_ITEM_FROM_CART,
  payload: item,
});
