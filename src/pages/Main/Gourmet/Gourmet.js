import React, { Component } from 'react';
import '../Gourmet/Gourmet.scss';

class Gourmet extends Component {
  constructor() {
    super();
    this.state = {
      imageCurrentNo: 0,
      images: [
        { name: '#ITALIA', image: '/images/Main/matzip.jpg' },
        { name: '#KOREA', image: '/images/Main/dumpling.jpg' },
        { name: '#CHINA', image: '/images/Main/chinese.jpg' },
        { name: '#USA', image: '/images/Main/brand.jpg' },
      ],
    };
  }

  onChangeImage = index => {
    if (this.state.images.length <= index) index = 0;
    if (index < 0) index = this.state.images.length - 1;

    this.setState({ imageCurrentNo: index });
  };
  render() {
    const { images } = this.state;
    return (
      <section className="gourmet">
        <div className="gourmetTitle">
          <span>Recommend</span>
        </div>

        <div className="imageSlide">
          <div className="slideBox">
            <div
              className="slideList"
              style={{
                transform: `translate3d(
                ${this.state.imageCurrentNo * -750}px, 0px, 0px`,
              }}
            >
              {images.map((list, no) => (
                <div className="slideContent" key={no}>
                  <picture>
                    <img alt="gourmet" src={list.image} />
                    <p>{list.name}</p>
                  </picture>
                </div>
              ))}
            </div>

            <div
              className="buttonPrev"
              onClick={() => this.onChangeImage(this.state.imageCurrentNo - 1)}
            >
              <i class="fas fa-chevron-left"></i>
            </div>
            <div
              className="buttonNext"
              onClick={() => this.onChangeImage(this.state.imageCurrentNo + 1)}
            >
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
          <div className="paginationBox">
            {images?.map((list, i) => (
              <div
                key={i}
                onClick={() => {
                  this.onChangeImage(i);
                }}
              >
                <picture>
                  <img alt="gourmet" src={list.image} />
                </picture>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Gourmet;
