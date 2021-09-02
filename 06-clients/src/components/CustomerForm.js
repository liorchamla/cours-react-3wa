import React, { Component } from "react";

class CustomerForm extends Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
    },
  };

  componentDidMount() {
    console.log(this.props);
  }

  handleChange = (event) => {
    const form = { ...this.state.form };

    form[event.target.name] = event.target.value;

    this.setState({
      form: form,
    });
  };

  handleForm = (event) => {
    event.preventDefault();

    this.props.onCreate({ ...this.state.form });

    this.props.history.push("/");
  };

  cancel = () => {
    this.props.history.push("/");
  };

  render() {
    const { firstName, lastName, email } = this.state.form;

    return (
      <form onSubmit={this.handleForm}>
        <input
          type="text"
          placeholder="Nom de famille"
          value={lastName}
          name="lastName"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Prénom"
          value={firstName}
          name="firstName"
          onChange={this.handleChange}
        />
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          name="email"
          onChange={this.handleChange}
        />
        <button>Enregistrer</button>
        <button type="button" onClick={this.cancel}>
          Annuler
        </button>
      </form>
    );
  }
}

export default CustomerForm;
