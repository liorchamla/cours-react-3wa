import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function Form({ onSubmit, children }) {
  function handleSubmit(event) {
    event.preventDefault();

    onSubmit();
  }

  return <form onSubmit={handleSubmit}>{children}</form>;
}

function Field({ id, label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        className="form-control"
        placeholder={placeholder || label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function App() {
  const [contact, setContact] = useState({
    firstName: "Lior",
    lastName: "Chamla",
    email: "lior@mail.com",
  });

  function handleChange(event) {
    const { id, value } = event.target;

    const updatedContact = { ...contact };

    updatedContact[id] = value;

    setContact(updatedContact);
  }

  function handleSubmit() {
    console.log(contact);
  }

  return (
    <>
      <div className="container">
        <h1>Application</h1>

        <Form onSubmit={handleSubmit}>
          <Field
            label="Nom de famille"
            id="lastName"
            value={contact.lastName}
            onChange={handleChange}
          />

          <Field
            label="Prénom"
            id="firstName"
            value={contact.firstName}
            onChange={handleChange}
          />

          <Field
            label="Adresse email"
            id="email"
            type="email"
            value={contact.email}
            onChange={handleChange}
          />

          <button className="btn btn-success">Enregistrer</button>
        </Form>
      </div>
    </>
  );
}

export default App;
