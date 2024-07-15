import React from 'react';

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = class extends React.Component {
  static displayName = '06-state-input-multi';

  state = {
    fields: {
      name: '',
      email: '',
      address: ''
    },
    people: []
  };

  onFormSubmit = evt => {
    const people = [...this.state.people, this.state.fields];
    this.setState({
      people,
      fields: {
        name: '',
        email: '',
        address: ''
      }
    });
    evt.preventDefault();
  };

  onInputChange = evt => {
    const fields = Object.assign({}, this.state.fields);
    fields[evt.target.name] = evt.target.value;
    this.setState({fields});
  };

  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="Name"
            name="name"
            value={this.state.fields.name}
            onChange={this.onInputChange}
          />

          <input
            placeholder="Email"
            name="email"
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />

      <input
            placeholder="Address"
            name="address"
            value={this.state.fields.address}
            onChange={this.onInputChange}
          />

          <input type="submit" />
        </form>

        <div>
          <h3>People</h3>
          <ul>
            {this.state.people.map(({name, email, address}, i) => (
              <li key={i}>
                {name} ({email})  - {address}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};
