import React from 'react';
import './Btn.scss';
import LikeBtn from './LikeBtn/LikeBtn';
import AddCartBtn from './AddCartBtn/AddCartBtn';
import ProductCountBtn from './ProductCountBtn/ProductCountBtn';

class Btn extends React.Component {
  render() {
    const dataList = this.props.dataList;

    return (
      <div className="btn">
        <LikeBtn />
        <ProductCountBtn />
        <AddCartBtn dataList={dataList} />
      </div>
    );
  }
}

export default Btn;
