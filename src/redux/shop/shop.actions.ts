import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { CollectionsFromFB } from "../../models/CollectionsFromFB.model";
import { ShopActionEnum } from "./ShopAction.enum";

export const fetchCollectionsStart = () => ({
  type: ShopActionEnum.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap: CollectionsFromFB) => ({
  type: ShopActionEnum.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage: string) => ({
  type: ShopActionEnum.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch: any) => {
    const collection = firestore.collection("collections");
    dispatch(fetchCollectionsStart());
    collection
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => {
        dispatch(fetchCollectionsFailure(error.message));
      });
  };
};
