import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "./firebaseconfig";

// Register User
export const registerUser = async (email, password, role, additionalData) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await addDoc(collection(db, "users"), {
    uid: user.uid,
    email: user.email,
    role,
    ...additionalData,
  });
};
