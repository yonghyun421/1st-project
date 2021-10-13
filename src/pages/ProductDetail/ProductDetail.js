import React from 'react';
import ProductExplan from './ProductExplan/ProductExplan';
import ProductInfo from './ProductInfo/ProductInfo';
import DetailImageTop from './DetailImageTop/DetailImageTop';
import DetailImageLeft from './DetailImageLeft/DetailImageLeft';
import DetailImageRight from './DetailImageRight/DetailImageRight';
import DetailImageBottom from './DetailImageBottom/DetailImageBottom';
import TagBottom from './TagBottom/TagBottom';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      productData: [],
    };
  }

  componentDidMount() {
    const TOKEN = localStorage.getItem('token');
    fetch(
      'https://f960-211-106-114-186.ngrok.io/product/menu/category/1/detail',
      {
        method: 'GET',
        ...(TOKEN && {
          headers: {
            Authorization: TOKEN,
          },
        }),
      }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          productData: data,
        });
      });
  }

  render() {
    localStorage.setItem(
      'token',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.qywu0fsg1ylVPyh359QAGGFq66TM839qyr-W0_EZT-s'
    );

    const { result, detail } = this.state.productData;

    return (
      <>
        <div className="productDetail">
          <ProductExplan productData={detail} />
          <ProductInfo dataList={detail} />
          <DetailImageTop dataList={detail} />
          <DetailImageLeft dataList={detail} />
          <DetailImageRight dataList={detail} />
          <DetailImageBottom dataList={detail} />
          <TagBottom resultDataList={result} />
        </div>
      </>
    );
  }
}

export default ProductDetail;
