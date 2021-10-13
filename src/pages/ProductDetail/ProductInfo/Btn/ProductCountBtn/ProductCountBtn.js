import React from 'react';
import './ProductCountBtn.scss';

class ProductCountBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
  }
  quantityIncrease = () => {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  };

  quantityDecrease = () => {
    if (this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1,
      });
    }
  };

  render() {
    const { quantity } = this.state;
    return (
      <div className="productCountBtn">
        수량선택
        <div className="inputBox">
          <input
            className="quantity"
            type="text"
            placeholder={quantity}
            disabled
          />
        </div>
        <div className="button">
          <button onClick={this.quantityIncrease}>
            <i className="fas fa-plus-square"></i>
          </button>
          <button onClick={this.quantityDecrease}>
            <i className="fas fa-minus-square"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCountBtn;
