import { useState } from "react";
import InvoiceForm from "./InvoiceForm";
import { FaTrash, FaPen } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { createInvoice, deleteInvoice, updateInvoice } from "../../redux/store";
import toast from "react-hot-toast";
import { getDatabase, ref, remove, set, update } from "@firebase/database";

const InvoicesList = ({ customer, customerId, invoices }) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [editedInvoices, setEditedInvoices] = useState([]);

  const isEdited = (id) => {
    return editedInvoices.some((identifiant) => identifiant === id);
  };

  const stopEdition = (id) => {
    setEditedInvoices(
      editedInvoices.filter((identifiant) => identifiant !== id)
    );
  };

  const handleCreate = (invoice) => {
    const db = getDatabase();

    const id = Date.now();

    const invoiceRef = ref(db, "invoices/" + id);
    const customerInvoiceRef = ref(
      db,
      "customers/" + customerId + "/invoices/" + id
    );

    set(customerInvoiceRef, invoice);

    set(invoiceRef, {
      ...invoice,
      customer: {
        firstName: customer.firstName,
        lastName: customer.lastName,
        key: customerId,
      },
    });

    setDisplayForm(false);

    toast.success("La facture a bien été créée");
  };

  const handleUpdate = (invoice) => {
    const db = getDatabase();

    const customerInvoiceRef = ref(
      db,
      "customers/" + customerId + "/invoices/" + invoice.id
    );
    const invoiceRef = ref(db, "invoices/" + invoice.id);

    update(customerInvoiceRef, invoice);
    update(invoiceRef, invoice);

    stopEdition(invoice.id);

    toast.success("La facture a bien été modifiée");
  };

  const handleDelete = (id) => {
    const db = getDatabase();

    const customerInvoiceRef = ref(
      db,
      "customers/" + customerId + "/invoices/" + id
    );
    const invoiceRef = ref(db, "invoices/" + id);

    remove(customerInvoiceRef);
    remove(invoiceRef);

    toast.success("La facture a bien été supprimée !");
  };

  const handleEdit = (id) => {
    setEditedInvoices([...editedInvoices, id]);
  };

  let invoicesArray = [];

  if (invoices) {
    invoicesArray = Object.keys(invoices).map((key) => {
      return {
        ...invoices[key],
        id: key,
      };
    });
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Numéro</th>
            <th>Montant</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {invoicesArray.map((i) =>
            isEdited(i.id) === false ? (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.amount}</td>
                <td>{i.date}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleEdit(i.id)}
                  >
                    <FaPen />
                  </button>
                  <button
                    className="btn btn-sm btn-danger ms-1"
                    onClick={() => handleDelete(i.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ) : (
              <InvoiceForm
                key={i.id}
                onClose={() => stopEdition(i.id)}
                onSubmit={handleUpdate}
                invoice={i}
              />
            )
          )}

          {displayForm && (
            <InvoiceForm
              onClose={() => setDisplayForm(false)}
              onSubmit={handleCreate}
            />
          )}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => setDisplayForm(true)}>
        Ajouter
      </button>
    </>
  );
};

export default InvoicesList;
