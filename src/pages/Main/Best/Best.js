import React, { Component } from 'react';
import ProductPreview from '../../ProductList/ProductPreview/ProductPreview';
import { Link } from 'react-router-dom';
import '../Best/Best.scss';

class Best extends Component {
  constructor() {
    super();
    this.state = {
      menuList: [],
    };
  }

  // 통신 연결 안할때 fetch에러 방지
  componentDidMount() {
    fetch('https://f960-211-106-114-186.ngrok.io/product/main', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          menuList: data.result,
        });
      });
  }

  render() {
    const { menuList } = this.state;
    return (
      <section className="best">
        <div className="bestTitle">
          <img alt="dish" src="/images/Main/dish.png" />
          <div className="topTitle">
            <p>MECOOK</p>
            <p id="best">BEST</p>
          </div>
          <div className="botTitle">
            <p>미쿡에서</p>
            <p>잘 나가는 메뉴를 한눈에!</p>
          </div>
        </div>
        <div className="bestList">
          <p id="viewBest">
            <Link to="/best">
              <i className="fas fa-award" />
              &nbsp;BEST ITEMS
            </Link>
          </p>
          <ul className="listItems">
            {menuList &&
              menuList.map(m => {
                const {
                  id,
                  mainImage,
                  category,
                  name,
                  cookingTime,
                  serving,
                  like,
                } = m;
                return (
                  <ProductPreview
                    key={id}
                    id={id}
                    image={mainImage}
                    type={category}
                    name={name}
                    cookingTime={cookingTime}
                    availPeople={serving}
                    like={like}
                  />
                );
              })}
          </ul>
        </div>
      </section>
    );
  }
}

export default Best;
