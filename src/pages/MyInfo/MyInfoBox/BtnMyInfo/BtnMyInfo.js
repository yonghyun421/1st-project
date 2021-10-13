import React from 'react';
import './BtnMyInfo.scss';

class BtnMyInfo extends React.Component {
  render() {
    return (
      <button className="btnMyInfo" onClick={this.props.handleShowBtnClick}>
        <span>
          My Info<i className="fas fa-caret-down"></i>
        </span>
      </button>
    );
  }
}

export default BtnMyInfo;
