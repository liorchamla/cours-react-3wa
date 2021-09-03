import "./App.css";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import CustomersPage from "./pages/customers/CustomersPage";
import CustomerFormPage from "./pages/customer-form/CustomerFormPage";
import { useState } from "react";
import CUSTOMERS from "./customers";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

function App() {
  const [customers, setCustomers] = useState(CUSTOMERS);

  const deleteCustomer = (id) => {
    const updatedCustomers = customers.filter((c) => c.id !== id);

    setCustomers(updatedCustomers);

    toast.success("Le client a bien été supprimé");
  };

  const createCustomer = (customer) => {
    customer.id = Date.now();

    const updatedCustomers = [...customers, customer];

    setCustomers(updatedCustomers);

    toast.success("Le client a bien été ajouté");
  };

  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <Navbar />

      <main className="container pt-5">
        <Switch>
          <Route path="/customers/create">
            <CustomerFormPage onCreate={createCustomer} />
          </Route>
          <Route path="/customers">
            <CustomersPage customers={customers} onDelete={deleteCustomer} />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
