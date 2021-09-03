import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const CustomerFormPage = (props) => {
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const history = useHistory();

  const handleChange = (event) => {
    const { id, value } = event.target;

    setCustomer({ ...customer, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onCreate(customer);

    history.push("/customers");
  };

  return (
    <>
      <h2>Créer un client</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="lastName">Nom de famille</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Nom de famille du client"
            value={customer.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Prénom du client"
            value={customer.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Adresse email du client"
            value={customer.email}
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-primary">Enregistrer</button>
      </form>
    </>
  );
};

export default CustomerFormPage;
