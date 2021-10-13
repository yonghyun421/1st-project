import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HashTag extends Component {
  constructor() {
    super();
    this.state = {
      hashtagList: [],
      filterdList: [],
    };
  }
  componentDidMount() {
    fetch(
      'https://f960-211-106-114-186.ngrok.io/product/menu/category/1/detail',
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          hashtagList: data.result[0].hashtag,
        });
      });
  }

  handleSearch = hashTag => {
    fetch('https://f960-211-106-114-186.ngrok.io/product/search', {
      method: 'POST',
      body: JSON.stringify({
        keyword: [hashTag],
      }),
    })
      .then(response => response.json())
      .then(result => {
        this.setState({
          filteredList: result,
        });
      });
  };

  render() {
    const { hashtagList } = this.state;
    return (
      <>
        <span className="span">당신의 맛있는 하루를 위한</span>
        <ul className="ul">
          {hashtagList &&
            hashtagList.map(tag => {
              return (
                <li className="li" key={tag}>
                  <Link
                    to="#"
                    onClick={() => this.handleSearch(tag)}
                  >{`#${tag}`}</Link>
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}

export default HashTag;
