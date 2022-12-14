import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useFireBaseAuth from "../firebase/useFirebaseAuth";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth";

const createArticle = () => {
  const { logOut, user, loading } = useFireBaseAuth();
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleLogin = () => {
      signInWithPopup(auth, provider)
          .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.

              // The signed-in user info.
              const user = result.user;

              // you would insert this detail to your database and proceed from there.
              console.log(user);

              router.push("/createArticle");

              // ...
          })
          .catch((error) => {
              console.log(error);
          });
  };

//   const handleLogout = () => {
//     signOut(auth).then((res) => {
//         // clear up the cookies
//         // maybe update the database
//         // console.log("Signed out");
//         router.push("/");
//     });
// };

  if (loading) {
      return "Loading please wait...";
  }

  // we are logged in
  if (user) {
      return (
        <div className="container bg-secondary p-5 rounded text-center bg-opacity-25">
          <h1 className="mb-3 text-success">Hello '{user?.displayName}'!!</h1>
          <button
                type="button"
                className="btn btn-outline-light btn-sm "
                onClick={logOut}
            >
                Logout
            </button>
      </div>
      )
  }

  return (
    <div className='content-center'>
          <button
              type="button"
              className="btn btn-outline-light btn-sm text-center"
              onClick={handleLogin}
          >
              Login with Google
          </button>
      </div>
  );
};

export default createArticle;