import React from 'react';
import './ProductExplan.scss';

class ProductExplan extends React.Component {
  render() {
    console.log(this.props.productData);
    return (
      <div className="productImage">
        <img
          alt="물만두"
          src={this.props.productData && this.props.productData[0].image_url}
        />
      </div>
    );
  }
}

export default ProductExplan;
