import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    try {
      // On attend que le compte soit créé
      await createUserWithEmailAndPassword(auth, data.email, data.password);

      // On gère le succès
      toast.success("Votre compte a bien été créé !");
      history.push("/account/complete");
    } catch (error) {
      // On gère l'erreur
      toast.error("Il y'a eu un problème lors de votre inscription");
    }
  };

  return (
    <>
      <h1>Créer un compte</h1>

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
          <FaCheck className="me-2"></FaCheck>
          Confirmer
        </button>
      </form>
    </>
  );
};

export default RegisterPage;
