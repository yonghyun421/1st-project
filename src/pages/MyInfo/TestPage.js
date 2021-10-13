import React from 'react';
import './TestPage.scss';
import MyInfoBox from './MyInfoBox/MyInfoBox.js';

class MyInfo extends React.Component {
  render() {
    return (
      <div className="testPage">
        <h1>My Info Test Page</h1>
        <MyInfoBox />
      </div>
    );
  }
}

export default MyInfo;
