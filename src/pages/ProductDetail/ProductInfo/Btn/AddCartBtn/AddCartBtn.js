import React from 'react';
import './AddCartBtn.scss';

class AddCartBtn extends React.Component {
  clickCartBtn = () => {
    const TOKEN = localStorage.getItem('token');
    if (TOKEN) {
      fetch('http://10.58.2.208:8000/cart', {
        method: 'POST',
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.LI4hn7Fi_mX8KdmCmVAcAhejLdtCgmV4LefCTdcqR24',
        },
        body: JSON.stringify({
          product: '11',
          quantity: 3,
        }),
      })
        .then(res => res.json())
        .then(data => data);
    } else {
      alert('로그인한 사용자만 이용할 수 있는 서비스입니다.');
    }
  };

  render() {
    return (
      <button onClick={this.clickCartBtn} className="addCartBtn">
        ADD TO MY MENU
      </button>
    );
  }
}

export default AddCartBtn;
