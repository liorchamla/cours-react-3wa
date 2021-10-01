import { getDatabase, ref, set } from "@firebase/database";
import {
  getStorage,
  ref as fileRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import { getAuth } from "firebase/auth";
import { useRef, useState } from "react";
import { FaSave } from "react-icons/fa";
import { useHistory } from "react-router";

const RegisterDetailsPage = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    picture: "",
  });

  const inputRef = useRef();

  const handleChange = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth(); // Pour obtenir le user connecté
    const storage = getStorage(); // Pour obtenir le stockage
    const db = getDatabase(); // Pour obtenir la db

    const uid = auth.currentUser.uid; // ID unique de l'user connecté

    const file = inputRef.current.files[0];
    const pictureRef = fileRef(storage, "avatars/" + uid);

    await uploadBytes(pictureRef, file);

    const pictureUrl = await getDownloadURL(pictureRef); // URL de l'imagine au final

    const userRef = ref(db, "users/" + uid);
    await set(userRef, { ...data, picture: pictureUrl });

    history.push("/customers");
  };

  return (
    <>
      <h1>Donnez nous des détails</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="Votre prénom"
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nom de famille</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Votre nom de famille"
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">Ville</label>
          <input
            type="text"
            className="form-control"
            name="city"
            placeholder="Votre ville"
            value={data.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="picture">Avatar</label>
          <input
            ref={inputRef}
            type="file"
            className="form-control"
            name="picture"
            placeholder="L'URL de votre avatar"
            value={data.picture}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success">
          <FaSave className="me-2"></FaSave>
          Continuer
        </button>
      </form>
    </>
  );
};

export default RegisterDetailsPage;
