// This is an closed layered architecture pattern
// where presentation layer interacts directly with the service layer to query/mutate databse layer
// in this walkthrough we will migrate slowly
// by implementing business and service layer which are closed

// reference to documentation:
// https://firebase.google.com/docs/firestore/query-data/get-data#web
import app from "@/lib/firebaseConfig";
import { getFirestore } from "@react-native-firebase/firestore";
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Build a reference to the collection and document
const userCollection = db.collection("users");

async function getUser() {
  // const users = await db().collection("users").get();
  const response = await userCollection
    .doc("HJzX8Mb5mvO5mviSdSZ2")
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        return doc.data();
      }
    });
  return response;
}

async function createUser() {}

export { getUser, createUser };
