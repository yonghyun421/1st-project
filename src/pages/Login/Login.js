import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { id: '', pw: '', isActive: false, isModalOpen: false };
  }

  clickLogin = () => {
    fetch('http://10.58.2.115:8000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        account: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.TOKEN) {
          console.log('로그인 성공');
          localStorage.setItem('token', response.TOKEN);
          this.props.history.push('/');
        } else {
          alert('아이디 또는 비밀번호가 다릅니다.');
        }
      })
      .catch(err => {
        alert('로그인 실패');
        console.error(err);
      });
  };

  goToSignin = () => {
    this.props.history.push('/signin');
  };

  handleIdInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const isvalid = this.state.id.includes('@') && this.state.pw.length >= 8;
    return (
      <div className="outBox">
        <button className="close"></button>
        <h1>LOGIN</h1>
        <div className="infoContainer">
          <input
            className="myInfo"
            onChange={this.handleIdInput}
            type="text"
            name="id"
            placeholder="아이디"
          />
        </div>
        <div className="numContainer">
          <input
            onChange={this.handleIdInput}
            className="secretNumber"
            type="password"
            name="pw"
            placeholder="비밀번호"
          />
        </div>

        {/*<input type="checkbox" className="saveBtn" />
         <label>아이디 저장</label>*/}

        <button
          className={`loginBtn ${isvalid ? '' : 'normalBtn'}`}
          disabled={!isvalid}
          onClick={this.clickLogin}
        >
          LOGIN
        </button>
        <button className="signInBtn" onClick={this.goToSignin}>
          SIGN IN
        </button>
      </div>
    );
  }
}

export default Login;
