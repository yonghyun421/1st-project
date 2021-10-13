import React from 'react';
import './DetailImageBottom.scss';

class DetailImageBottom extends React.Component {
  render() {
    const dataList = this.props.dataList;

    return (
      <div className="detailImageBottom">
        {/* 받아올 멘트 */}
        <h1> {dataList && dataList[5].text}</h1>
        <figure>
          {/* 이미지 데이터 값 */}
          <img alt="연어" src={dataList && dataList[5].image_url} />
        </figure>
      </div>
    );
  }
}

export default DetailImageBottom;
