import React from 'react';
import './NonMemberInfo.scss';

class NonMemberInfo extends React.Component {
  render() {
    return (
      <div className="nonMemberContainer">
        <h1 className="myInfoTitle">My Info</h1>
        <div className="nonMemberContent">
          <h1>
            <span>로그인한 사용자</span>만 이용가능한 서비스입니다.
          </h1>
        </div>
      </div>
    );
  }
}

export default NonMemberInfo;
