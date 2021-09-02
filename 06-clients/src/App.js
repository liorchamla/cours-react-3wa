import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import CustomersTable from "./components/CustomersTable";
import CustomerForm from "./components/CustomerForm";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

class App extends Component {
  state = {
    customers: [
      { id: 1, firstName: "Lior", lastName: "Chamla", email: "lior@mail.com" },
      {
        id: 2,
        firstName: "Magali",
        lastName: "Pernin",
        email: "magali@mail.com",
      },
      {
        id: 3,
        firstName: "Joseph",
        lastName: "Chamla",
        email: "joseph@mail.com",
      },
    ],
  };

  createCustomer = (customer) => {
    customer.id = Date.now();

    this.setState({
      customers: [...this.state.customers, customer],
    });
  };

  removeCustomer = (id) => {
    this.setState({
      customers: this.state.customers.filter((c) => c.id !== id),
    });
  };

  render() {
    const CustomerFormWithRouter = withRouter(CustomerForm);

    return (
      <>
        <h1>Liste des clients</h1>

        <BrowserRouter>
          <nav>
            <Link to="/">Liste des clients</Link>
            <Link to="/form">Formulaire d'ajout</Link>
          </nav>

          <Switch>
            <Route path="/form">
              <CustomerFormWithRouter onCreate={this.createCustomer} />
            </Route>

            <Route path="/">
              <Link to="/form">Ajouter un client</Link>
              <CustomersTable
                customers={this.state.customers}
                onDelete={this.removeCustomer}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
