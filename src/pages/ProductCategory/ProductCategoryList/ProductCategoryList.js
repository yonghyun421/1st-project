import React from 'react';
import './ProductCategoryList.scss';

class ProductCategory extends React.Component {
  render() {
    const { id, handleShowProductList, handleMouseOverList, name } = this.props;
    return (
      <li
        id={id}
        onClick={handleShowProductList}
        onMouseOver={handleMouseOverList}
      >
        &nbsp;{name}&nbsp;
      </li>
    );
  }
}

export default ProductCategory;
