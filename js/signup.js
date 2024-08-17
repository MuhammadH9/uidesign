import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  setDoc,
} from "./firebase.js";

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const Age = document.getElementById("Age");
const password = document.getElementById("password");

const signUpHandler = async () => {
  try {
    const userObj = {
      fullName: fullname.value,
      email: email.value,
      Age: Age.value,
    };
    const userSignup = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const uid = userSignup.user.uid;
    // save user data on firestore

    const response = await setDoc(doc(db, "users", uid), userObj);
    alert("user signup! successful. \n Login now!");
    location.href = "../pages/login.html";
    console.log(userSignup, "userSignup");
  } catch (error) {
    alert(error.message);
  }
};

window.signUpHandler = signUpHandler;
