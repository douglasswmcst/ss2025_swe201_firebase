// This is an closed layered architecture pattern
// where presentation layer interacts directly with the service layer to query/mutate databse layer
// in this walkthrough we will migrate slowly
// by implementing business and service layer which are closed

// reference to documentation:
// https://firebase.google.com/docs/firestore/query-data/get-data#web
import app from "@/lib/firebaseConfig";
import { getFirestore } from "@react-native-firebase/firestore";
import { useStore } from "../store";
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Build a reference to the collection and document
const userCollection = db.collection("users");

async function getUser() {
  // 1. PRESENTATION LAYER -> CALL SERVICE LAYER GETUSER()
  // 2. SERVICE LAYER -> READ USER DATA FROM DATABASE LAYER
  // 3. PERSISTENCE LAYER -> RETURN USER DATA FROM DATABSE LAYER
  // AND SAVE TO PERSISTENCE LAYER (STORE:ZUSTAND LIBRARY)
  // 4. PRESENTATION LAYER -> USE PERSISTENCE LAYER CALLING USE STATE TO DISPLAY USER DATA

  // REQUESTING USER DATA BY ID FROM DATABASE FIRESTORE
  const response = await userCollection
    .doc("HJzX8Mb5mvO5mviSdSZ2")
    .get()
    .then((doc) => {
      // VERIFYING DATA EXIST
      if (doc.exists) {
        console.log("Document data:", doc.data());
        // UPDATE DATABASE RESPONSE TO STORE
        const setUser = useStore((state) => state.updateUser(doc.data()));
        console.log("setUser", setUser);

        // RETURN USER DATA
        return doc.data();
      }
    });
  return response;
}

async function createUser() {}

export { getUser, createUser };
