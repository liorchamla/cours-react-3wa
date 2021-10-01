import { getDatabase, ref, get, onValue } from "@firebase/database";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import InvoicesList from "./InvoicesList";

const CustomerPage = () => {
  const [customer, setCustomer] = useState(null);
  const match = useRouteMatch();
  const id = match.params.id;

  useEffect(() => {
    const db = getDatabase();
    const customerRef = ref(db, "customers/" + id);

    // get(customerRef).then((data) => setCustomer(data.val()));
    return onValue(customerRef, (data) => setCustomer(data.val()));
  }, []);

  return (
    <>
      {!customer && <h2>Chargement ...</h2>}
      {customer && (
        <>
          <h1>
            Client : {customer.firstName} {customer.lastName}
          </h1>
          <h2>Email : {customer.email}</h2>

          <hr />
          <h2>Factures</h2>

          <InvoicesList
            customer={customer}
            customerId={id}
            invoices={customer.invoices}
          />
        </>
      )}
    </>
  );
};

export default CustomerPage;
