import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Kontakt hinzufügen</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Name eingeben..."
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Email eingeben..."
                value={email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefonnummer</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Telefonnummer eingeben..."
                value={phone}
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="Kontakt hinzufügen"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact;
