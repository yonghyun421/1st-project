import React, { Component } from 'react';
import HashTag from './HashTag/HashTag';
import './Search.scss';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      inputData: '',
      searchResult: [],
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleInput = e => {
    this.setState({
      inputData: e.target.value,
    });
  };

  isEnter = e => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  };

  handleReset = () => {
    this.setState({
      inputData: '',
    });
  };

  handleSearch = () => {
    fetch('https://f960-211-106-114-186.ngrok.io/{product}/search', {
      method: 'POST',
      body: JSON.stringify({
        keyword: this.state.inputData.split(' '),
      }),
    })
      .then(response => response.json())
      .then(result => {
        this.setState({
          inputData: '',
          searchResult: result,
        });
      });
  };

  render() {
    return (
      <div className="searchArea">
        <div className="searchBox">
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="searchInput"
              placeholder="SEARCH"
              onChange={this.handleInput}
              value={this.state.inputData}
              onKeyPress={this.isEnter}
            />
            <i className="fas fa-ban" onClick={this.handleReset}></i>
            <i className="fas fa-search" onClick={this.handleSearch}></i>
          </form>
          <HashTag />
        </div>
      </div>
    );
  }
}

export default Search;
