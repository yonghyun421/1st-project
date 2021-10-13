import React, { Component } from 'react';
import './BestProduct.scss';
import ProductPreview from '../ProductList/ProductPreview/ProductPreview';

class BestProduct extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

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
      <div className="best">
        <div className="bestHeader">
          <span>MONTHLY BEST</span>
        </div>
        <ul className="bestList">
          {menuList &&
            menuList.map(menu => {
              const {
                productId,
                mainImage,
                subImage,
                category,
                name,
                cookingTime,
                serving,
                like,
              } = menu;
              return (
                <ProductPreview
                  key={productId}
                  productId={productId}
                  mainImage={mainImage}
                  subImage={subImage}
                  category={category}
                  name={name}
                  cookingTime={cookingTime}
                  serving={serving}
                  like={like}
                />
              );
            })}
        </ul>
      </div>
    );
  }
}

export default BestProduct;
