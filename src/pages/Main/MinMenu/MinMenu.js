import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MinMenu.scss';
import MINMENU_DATA from './MinMenuData';
import MinMenuList from './MinMenuList/MinMenuList';

class MinMenu extends Component {
  state = {
    isVisible: false,
    listId: 0,
  };

  handleShowProductList = e => {
    this.setState({ isVisible: true });
  };

  handleMouseOverList = e => {
    this.setState({ listId: e.target.id });
  };

  handleCloseProductList = () => {
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <div className="categoryContainer">
        <div className="cover">
          <Link to="/">
            <button className="btnClose"></button>
          </Link>
          <p className="categoryListTitle">
            <span>MENU</span>
          </p>
          <ul className="categoryListContainer">
            {MINMENU_DATA.menu.map((menu, index) => {
              return (
                <MinMenuList
                  key={index}
                  id={index}
                  name={menu}
                  handleShowProductList={this.handleShowProductList}
                  handleMouseOverList={this.handleMouseOverList}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default MinMenu;
