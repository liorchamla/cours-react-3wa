import React, { useState } from "react";
import Pagination from "../../components/Pagination";

const CustomersPage = ({ customers, onDelete }) => {
  const [pagination, setPagination] = useState({
    page: 1,
    start: 0,
    end: 5,
  });

  const handlePageChange = (data) => {
    setPagination(data);
  };

  return (
    <>
      <h2>La liste des clients</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Numéro</th>
            <th>Nom complet</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers.slice(pagination.start, pagination.end).map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>
                {c.firstName} {c.lastName}
              </td>
              <td>{c.email}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => onDelete(c.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        page={1}
        count={customers.length}
        onPageChange={handlePageChange}
        itemsPerPage={5}
      />
    </>
  );
};

export default CustomersPage;
