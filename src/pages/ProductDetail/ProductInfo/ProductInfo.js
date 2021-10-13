import React from 'react';
import './ProductInfo.scss';
import Btn from './Btn/Btn';
class ProductInfo extends React.Component {
  render() {
    const dataList = this.props.dataList;
    return (
      <div className="productInfoBox">
        <h1>{dataList ? dataList[1].text : null}</h1>
        <Btn dataList={dataList && dataList} />
      </div>
    );
  }
}

export default ProductInfo;
