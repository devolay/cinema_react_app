import { combineReducers, applyMiddleware, createStore } from "redux";
import { moviesReducer } from "./movies/index";
import * as SharedTypes from "shared/types";
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import {
  FirestoreReducer,
  firestoreReducer,
  getFirestore,
  createFirestoreInstance,
} from "redux-firestore";
import { FirebaseReducer, firebaseReducer, getFirebase } from "react-redux-firebase";
import thunk from "redux-thunk";
import { InitialState } from "./movies/movies.types";

const firebaseConfig = {
  apiKey: "AIzaSyD9V07oDzIXdbzLOe2Pm0pOjUuif9vrskU",
  authDomain: "cinemasio.firebaseapp.com",
  projectId: "cinemasio",
  storageBucket: "cinemasio.appspot.com",
  messagingSenderId: "1042975962626",
  appId: "1:1042975962626:web:10fcbce3a65510624e591b",
  measurementId: "G-KLCFLHH2TZ",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const rrfConfig = {
  userProfile: "profiles",
  useFirestoreForProfile: true,
};

export interface FirestoreSchema {
  profiles: SharedTypes.Profile[];
  reservations: SharedTypes.Reservation[];
  rooms: SharedTypes.Room[];
  showtimes: SharedTypes.Showtime[];
}

export interface RootState {
  firebase: FirebaseReducer.Reducer<any>;
  firestore: FirestoreReducer.Reducer<FirestoreSchema>;
  movies: InitialState;
}

export const rootReducer = combineReducers<RootState>({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  movies: moviesReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk.withExtraArgument(
      { getFirebase, getFirestore }, // eslint-disable-next-line
      // @ts-ignore,
      window.__REDUX_DEVTOOLS_EXTENSION__ && // eslint-disable-next-line
        // @ts-ignore,
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;

export type Dispatch = typeof store.dispatch;
