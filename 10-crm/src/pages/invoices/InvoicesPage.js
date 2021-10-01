import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

import Pagination from "../../components/Pagination";

import { Link } from "react-router-dom";

import { getDatabase, ref, onValue, remove } from "@firebase/database";
import toast from "react-hot-toast";

const InvoicesPage = () => {
  const [invoices, setInvoices] = useState([]);

  const db = getDatabase();

  useEffect(() => {
    const invoicesRef = ref(db, "/invoices");

    return onValue(invoicesRef, (data) => {
      const invoicesObject = data.val();
      setInvoices(
        Object.keys(invoicesObject).map((key) => {
          return {
            ...invoicesObject[key],
            id: key,
          };
        })
      );
    });
  }, []);

  const [pagination, setPagination] = useState({
    page: 1,
    start: 0,
    end: 10,
  });

  const handleDelete = (invoice) => {
    // 1. Références à la facture (dans les invoices et dans les customers)
    const invoiceRef = ref(db, "/invoices/" + invoice.id);
    const customerInvoiceRef = ref(
      db,
      "/customers/" + invoice.customer.key + "/invoices/" + invoice.id
    );

    remove(invoiceRef);
    remove(customerInvoiceRef);

    toast.success("Facture supprimée !");
  };

  return (
    <>
      <h1>Liste des factures</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Numéro</th>
            <th>Client</th>
            <th>Montant</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {invoices.slice(pagination.start, pagination.end).map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>
                <Link to={"/customers/" + i.customer.key}>
                  {i.customer.firstName} {i.customer.lastName}
                </Link>
              </td>
              <td>{i.amount}</td>
              <td>{i.date}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(i)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsPerPage={10}
        count={invoices.length}
        page={1}
        onPageChange={(pagination) => setPagination(pagination)}
      />
    </>
  );
};

export default InvoicesPage;
