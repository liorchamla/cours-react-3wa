import React, { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import { deleteCustomer } from "../../redux/store";

import { getDatabase, ref, onValue, remove } from "firebase/database";
import { Link } from "react-router-dom";

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // 1. Créer une référence aux customers dans Firebase
    const db = getDatabase();

    // 2. On va SUIVRE les changements de cette référence
    const customersRef = ref(db, "customers");

    // 3. A chaque changement : on répercute les changements dans le state
    const unsubscribe = onValue(customersRef, (data) => {
      const customersData = data.val();

      setCustomers(
        Object.keys(customersData).map((key) => {
          return {
            ...customersData[key],
            id: key,
          };
        })
      );
    });

    return unsubscribe;
  }, []);

  const handleDelete = (id) => {
    // 1. Une référence au customer précis qu'on veut supprimer (getDatabase, ref)
    const db = getDatabase();
    const customerRef = ref(db, "customers/" + id);

    // 2. Supprimer la référence (remove)
    remove(customerRef);

    toast.success("Le client a bien été supprimé");
  };

  const length = 5;

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
                <Link to={"/customers/" + c.id}>
                  {c.firstName} {c.lastName}
                </Link>
              </td>
              <td>{c.email}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(c.id)}
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
        itemsPerPage={length}
      />
    </>
  );
};

export default CustomersPage;
