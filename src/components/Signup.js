import React, { useState } from "react";
import { auth } from "../database/firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter your full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019.png"
        alt=""
      />

      <form>
        <input
          placeholder="Fullname is required to register"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
        />
        <input
          placeholder="Photo URL (optional)"
          onChange={(e) => setProfilePic(e.target.value)}
          value={profilePic}
          type="text"
        />
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        <button type="submit" onClick={register}>
          Sign up
        </button>
      </form>
      <p>
        No account yet?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Signup;
