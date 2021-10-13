import React from 'react';
import BtnMyInfo from './BtnMyInfo/BtnMyInfo';
import MyInfo from './MyInfo/MyInfo';
import Cart from './Cart/Cart';
import NonMemberInfo from './MyInfo/NonMemberInfo/NonMemberInfo';
import './MyInfoBox.scss';

const TOKEN = localStorage.getItem('token');

class MyInfoBox extends React.Component {
  state = {
    isBoxVisible: true,
    userInfo: '',
  };

  componentDidMount() {
    if (TOKEN) {
      fetch('http://10.58.2.208:8000/user/login', {
        method: 'POST',
        headers: {
          Authorization: TOKEN,
        },
        body: JSON.stringify({
          account: 'cheesepuff90',
          password: 'Cheesepuff90@',
        }),
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            userInfo: data.message,
          });
        });
    }
  }

  handleShowBtnClick = () => {
    this.setState({ isBoxVisible: !this.state.isBoxVisible });
  };

  render() {
    const { grade } = this.state.userInfo;
    return (
      <>
        <div
          className={`myInfoBoxContainer ${
            this.state.isBoxVisible ? 'showBox' : 'hideBox'
          }`}
        >
          {TOKEN ? (
            <MyInfo
              userName={this.state.userInfo[0]}
              point={this.state.userInfo[1]}
              grade={grade}
            />
          ) : (
            <NonMemberInfo />
          )}
          <Cart point={this.state.userInfo[1]} cartList={this.state.cartList} />
          <BtnMyInfo handleShowBtnClick={this.handleShowBtnClick} />
        </div>
      </>
    );
  }
}

export default MyInfoBox;
