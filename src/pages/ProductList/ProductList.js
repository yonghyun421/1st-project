import React from 'react';
import ProductPreview from './ProductPreview/ProductPreview';
import './ProductList.scss';

class ProductList extends React.Component {
  state = {
    productList: [],
  };

  // API 연동 될 때
  componentDidUpdate(prevProps) {
    const TOKEN = localStorage.getItem('token');
    if (this.props.listId !== prevProps.listId) {
      fetch(
        `https://f960-211-106-114-186.ngrok.io/product/menu/${this.props.listId}/navbar`,
        {
          method: 'GET',
          ...(TOKEN && { headers: { Authorization: TOKEN } }),
        }
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ productList: data.result });
        });
    }
  }

  goToDetail = productId => {
    //this.props.history.push(`/product-detail/${productId}`);
  };

  render() {
    localStorage.setItem(
      'token',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.qywu0fsg1ylVPyh359QAGGFq66TM839qyr-W0_EZT-s'
    );
    const { isVisible, handleCloseProductList } = this.props;
    return (
      <div
        className={`productListContainer ${
          isVisible ? 'showProductList' : 'hideProductList'
        }`}
      >
        <div className="productListHeader">
          <button
            className="btnCloseProductList"
            onClick={handleCloseProductList}
          >
            <i className="fas fa-chevron-circle-left fa-2x"></i>
            <span>BACK</span>
          </button>
        </div>

        <div className="productListContent">
          {/* mock data로 map 돌려서 구현 예정 */}
          {this.state.productList &&
            this.state.productList.map(product => {
              const {
                id,
                mainImage,
                subImage,
                category,
                name,
                cookingTime,
                serving,
                like,
                this_user_like,
              } = product;
              return (
                <ProductPreview
                  key={id}
                  productId={id}
                  mainImage={mainImage}
                  subImage={subImage}
                  category={category}
                  name={name}
                  cookingTime={cookingTime}
                  serving={serving}
                  like={like}
                  userLike={this_user_like}
                  goToDetail={this.goToDetail}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default ProductList;
