

import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }


// The render is still a function don't be worry about that
  render() {
    return (
      <div className="search-bar">
        <input
        value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;
