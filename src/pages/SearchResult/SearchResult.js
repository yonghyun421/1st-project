import React, { Component } from 'react';
import './SearchResult.scss';

class SearchResult extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  // API 주소 임의로 넣어놓음

  // componentDidMount() {
  //   fetch(
  //     'https://f960-211-106-114-186.ngrok.io/product/menu/category/1/detail'
  //   )
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         productList: data.result,
  //       });
  //     });
  // }

  render() {
    // const {
    //   id,
    //   mainImage,
    //   category,
    //   name,
    //   cookingTime,
    //   serving,
    //   like,
    //   this_user_like,
    // } = this.state.productList;
    return (
      <div className="result">
        <div className="resultHeader">
          <div className="resultHeaderBox">
            <div className="resultInput"></div>
            <p>
              <em className="resultContent">샐러드</em>에 대해{' '}
              <em className="resultContent">총 22건</em>의 검색결과가 있습니다.
            </p>
          </div>
        </div>
        <div className="resultList">
          {/* {this.state.productList &&
            this.state.productList.map(p => {
              return (
                <ProductPreview
                  key={p.id}
                  productId={p.id}
                  mainImage={p.mainImage}
                  category={p.category}
                  name={p.name}
                  cookingTime={p.cookingTime}
                  serving={p.serving}
                  like={p.like}
                  userLike={p.this_user_like}
                />
              );
            })} */}
          <div className="product">1</div>
          <div className="product">2</div>
          <div className="product">3</div>
          <div className="product">4</div>
          <div className="product">5</div>
          <div className="product">6</div>
          <div className="product">7</div>
          <div className="product">8</div>
          <div className="product">9</div>
        </div>
      </div>
    );
  }
}

export default SearchResult;
