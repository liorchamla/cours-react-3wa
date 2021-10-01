import "./App.css";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import CustomersPage from "./pages/customers/CustomersPage";
import CustomerFormPage from "./pages/customer-form/CustomerFormPage";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import CustomerPage from "./pages/customer/CustomerPage";
import InvoicesPage from "./pages/invoices/InvoicesPage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import { getAuth } from "@firebase/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import RegisterDetailsPage from "./pages/register/RegisterDetailsPage";

function App() {
  const auth = getAuth();

  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <Navbar />

      <main className="container pt-5">
        <Switch>
          <Route path="/account/register" component={RegisterPage} />
          <Route path="/account/login" component={LoginPage} />

          <ProtectedRoute
            path="/account/complete"
            component={RegisterDetailsPage}
            redirectTo="/account/login"
          />
          <ProtectedRoute
            redirectTo="/account/login"
            path="/customers/create"
            component={CustomerFormPage}
          />
          <ProtectedRoute
            path="/customers/:id"
            component={CustomerPage}
            redirectTo="/account/login"
          />
          <ProtectedRoute
            path="/customers"
            component={CustomersPage}
            redirectTo="/account/login"
          />
          <ProtectedRoute
            path="/invoices"
            component={InvoicesPage}
            redirectTo="/account/login"
          />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
