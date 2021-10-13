import React from 'react';
import './DetailImageTop.scss';

class DetailImageTop extends React.Component {
  render() {
    const dataList = this.props.dataList;

    return (
      <div className="detailImageTop">
        <div className="imageTopInfo">
          <p>{dataList ? dataList[2].text : null}</p>
        </div>
        <figure>
          <img alt="케이크" src={dataList ? dataList[2].image_url : null} />
        </figure>
      </div>
    );
  }
}

export default DetailImageTop;
