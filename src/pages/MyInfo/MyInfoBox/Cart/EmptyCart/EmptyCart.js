import React from 'react';
import './EmptyCart.scss';

class EmptyCart extends React.Component {
  render() {
    return (
      <div className="emptyCartContainer">
        <h3>
          다양한 <span>피코크 상품</span>을 만나보세요.
        </h3>
      </div>
    );
  }
}

export default EmptyCart;
