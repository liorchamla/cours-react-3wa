import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "@firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle, FaUnlock } from "react-icons/fa";
import { useHistory } from "react-router";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const auth = getAuth();

  const handleChange = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const hasAlreadyDetailsInDatabase = async (uid) => {
    const db = getDatabase();

    const userRef = ref(db, "users/" + uid);

    const data = await get(userRef);

    return data.val() !== null;
  };

  const handleRedirect = async (credentials) => {
    toast.success("Connexion réussie");

    if (await hasAlreadyDetailsInDatabase(credentials.user.uid)) {
      history.push("/customers");
      return;
    }

    history.push("/account/complete");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      handleRedirect(credentials);
    } catch (error) {
      toast.error("Impossible de vous connecter, vérifiez vos informations");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const credentials = await signInWithPopup(auth, new GoogleAuthProvider());
      handleRedirect(credentials);
    } catch (error) {
      toast.error("La connexion avec Google n'a pas fonctionné");
    }
  };

  return (
    <>
      <h1>Connexion</h1>

      <button className="btn btn-primary mb-2" onClick={handleGoogleLogin}>
        <FaGoogle className="me-2"></FaGoogle>
        Connexion avec Google !
      </button>

      <h2>Ou connectez vous avec votre email / mot de passe :</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Adresse email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Adresse email ..."
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Mot de passe ..."
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success">
          <FaUnlock className="me-2"></FaUnlock>
          Connexion
        </button>
      </form>
    </>
  );
};

export default LoginPage;
