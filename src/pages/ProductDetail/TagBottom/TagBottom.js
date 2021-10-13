import React from 'react';
import { Link } from 'react-router-dom';
import './TagBottom.scss';

class TagBottom extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredList: [],
    };
  }

  handleClick = hashTag => {
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
    const { resultDataList } = this.props;
    return (
      <div className="tagBottom">
        <div className="recommandTag">
          <h1>당신을 위한 추천 태그</h1>
        </div>
        <ul className="tagList">
          {resultDataList &&
            resultDataList[0].hashtag.map((tag, i) => {
              return (
                <li key={i}>
                  <Link
                    to="#"
                    onClick={() => {
                      this.handleClick(tag);
                    }}
                  >{`#${tag}`}</Link>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default TagBottom;
