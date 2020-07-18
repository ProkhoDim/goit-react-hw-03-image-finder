import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    message: '',
  };

  handleChange = e => this.setState({ message: e.currentTarget.value });

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    const { message } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            value={message}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
