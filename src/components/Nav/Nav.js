import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import './Nav.scss';

const CATEGORY_LIST = ['DINING', 'CAFE', 'CUPBOARD'];

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      scrollTop: 0,
      isLogin: false,
      isShowing: false,
    };
  }

  handleScroll = e => {
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    this.setState({
      scrollTop,
    });
  };

  componentWillUnMount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);

    this.setState({
      isLogin: localStorage.getItem('userToken') ? true : false,
    });
  };

  handleLog = () => {
    if (localStorage.getItem('userToken') && this.state.isLogin) {
      this.setState({
        isLogin: false,
      });
      alert('로그아웃 되었습니다.');
      localStorage.removeItem('userToken');
    } else {
      if (!this.state.isShowing) {
        this.setState({
          isShowing: true,
        });
      }
    }
  };

  test = () => {
    if (!localStorage.getItem('userToken')) {
      localStorage.setItem('userToken', 'asd');
      this.setState({
        isLogin: true,
      });
      alert('로그인 되었습니다.');
    }
  };

  render() {
    const { scrollTop } = this.state;
    return (
      <>
        <nav
          className={`original ${scrollTop ? 'change' : ''}`}
          onScroll={this.handleScroll}
        >
          <div className="threeLine">
            <Link to="/minmenu">
              <i className="fas fa-bars"></i>
            </Link>
            MECOOK
          </div>
          <div className="logo">
            <Link to="/">MECOOK</Link>
          </div>
          <div className="menu">
            {CATEGORY_LIST.map((categoryName, idx) => (
              <Link
                to={{ pathname: '/page', state: { category: categoryName } }}
                className="menuBtn"
                key={idx}
              >
                {categoryName}
              </Link>
            ))}
            <Link to="/best" className="menuBtn">
              BEST&#8314;
            </Link>
            <Link to="/search" className="menuBtn">
              SEARCH
            </Link>
          </div>
          <div className="login">
            <button className="loginBtn" onClick={this.handleLog}>
              {this.state.isLogin ? 'L O G O U T' : 'L O G I N'}
            </button>
            <Link to="/search">
              <i className="fas fa-search"></i>
            </Link>
          </div>
        </nav>
        <div>{this.state.isShowing && <Login />}</div>
      </>
    );
  }
}

export default Nav;
