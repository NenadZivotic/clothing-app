import React, { useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { User as FirebaseUser } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

import Homepage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import SignInAndSignUp from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CollectionsOverview from "./components/CollectionsOverview/CollectionsOverview";
import Header from "./components/Header/Header";
import CollectionPage from "./pages/Collection/CollectionPage";

export type User = FirebaseUser;
export interface UserWithId extends User {
  id: string;
}

const App: React.FC = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef?.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            } as UserWithId)
          );
        });
      }
      dispatch(setCurrentUser(userAuth as any));
    });

    return () => {
      listener();
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />}>
          <Route index element={<CollectionsOverview />} />
          <Route path=":collectionId" element={<CollectionPage />} />
        </Route>
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <SignInAndSignUp />}
        />
      </Routes>
    </>
  );
};

export default App;
