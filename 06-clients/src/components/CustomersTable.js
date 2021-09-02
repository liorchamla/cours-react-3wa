import React from "react";

function CustomersTable({ customers, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Numéro</th>
          <th>Nom</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {customers.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>
              {c.firstName} {c.lastName}
            </td>
            <td>{c.email}</td>
            <td>
              <button onClick={() => onDelete(c.id)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomersTable;
