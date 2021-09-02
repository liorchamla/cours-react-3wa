import React from "react";

class Contact extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <h1>Contact</h1>
        <form>
          <input type="text" name="prenom" placeholder="Votre prénom" />
          <button onClick={this.handleSubmit}>Envoyer</button>
        </form>
      </>
    );
  }
}

export default Contact;
