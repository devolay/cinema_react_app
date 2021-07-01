import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import { rrfProps } from "store";
import * as Types from "./FirebaseProvider.types";
import { useEffect } from "react";
import { logout } from "store/profiles";

const FirebaseProvider = ({ children }: Types.Props) => {
  useEffect(() => {
    const unsubscribe = getFirebase()
      .auth()
      .onAuthStateChanged((user) => {
        if (!user) logout();
      });
    return () => unsubscribe();
  }, []);

  return <ReactReduxFirebaseProvider {...rrfProps}>{children}</ReactReduxFirebaseProvider>;
};

export default FirebaseProvider;
