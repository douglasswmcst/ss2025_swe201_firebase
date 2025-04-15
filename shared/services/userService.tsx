// This is an open layered architecture pattern
// where presentation layer interacts directly with the database layer
// in this walkthrough we will migrate slowly
// by implementing business and service layer which are closed

// reference to documentation:
// https://firebase.google.com/docs/firestore/query-data/get-data#web
import app from "@/lib/firebaseConfig";
import { getFirestore, doc, getDoc } from "firebase/firestore";
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Build a refernce to the collection and document
const docUsersReference = doc(db, "users", "HJzX8Mb5mvO5mviSdSZ2");

async function getUser() {
  const docUserSnapshot = await getDoc(docUsersReference);
  if (docUserSnapshot.exists()) {
    // The response format is in Document Snapshot format type
    // we have to use the .data() function to serailise the response into
    // an Document Object Type
    console.log("Document data:", docUserSnapshot.data());
    const data = docUserSnapshot.data();
    console.log("DATA TO BE RETURNED", data);
    return data;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return "ERROR IN REQUEST";
  }
}

async function createUser() {}

export { getUser, createUser };
