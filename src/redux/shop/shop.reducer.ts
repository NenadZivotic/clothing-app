import { CollectionsFromFB } from "../../models/CollectionsFromFB.model";
import { ShopActionEnum } from "./ShopAction.enum";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: "",
};

const shopReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: CollectionsFromFB | string }
): {} => {
  switch (action.type) {
    case ShopActionEnum.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionEnum.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionEnum.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
