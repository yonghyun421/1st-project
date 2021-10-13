import React from 'react';
import './ProductPreview.scss';

class ProductPreview extends React.Component {
  state = {
    isLiked: 0,
    likeCount: 0,
    imageSrc: '',
  };

  componentDidMount() {
    const { userLike, like, mainImage } = this.props;
    this.setState({
      isLiked: userLike === 1 ? true : false,
      likeCount: like,
      imageSrc: mainImage,
    });
  }

  toggleBtnLike = () => {
    if (localStorage.getItem('token')) {
      this.setState({
        isLiked: !this.state.isLiked,
        likeCount: this.state.isLiked
          ? this.state.likeCount - 1
          : this.state.likeCount + 1,
      });

      fetch('https://f960-211-106-114-186.ngrok.io/like/user', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          product: this.props.productId,
        }),
      });
    } else {
      alert('로그인 해주십시오');
    }
  };

  handleImageMouseOver = src => {
    this.setState({
      imageSrc: src,
    });
  };

  handleImageMouseOut = src => {
    this.setState({
      imageSrc: src,
    });
  };

  render() {
    const {
      productId,
      mainImage,
      subImage,
      category,
      name,
      cookingTime,
      serving,
    } = this.props;
    return (
      <div className="productPreviewContainer">
        <img
          className="productPreviewImage"
          src={this.state.imageSrc}
          alt="food"
          onClick={() => this.props.goToDetail(productId)}
          onMouseOut={() => this.handleImageMouseOut(mainImage)}
          onMouseOver={() => this.handleImageMouseOver(subImage)}
        />
        <h3 className="productType">{category}</h3>
        <p className="productName">{name}</p>
        <div className="productInfo">
          <i className="far fa-clock"></i>
          <span>{cookingTime}</span>
          <i className="far fa-user"></i>
          <span>{serving}</span>
          <i
            className={`btnLike fa-heart ${this.state.isLiked ? 'fas' : 'far'}`}
            onClick={this.toggleBtnLike}
          ></i>
          <span>{this.state.likeCount}</span>
        </div>
      </div>
    );
  }
}

export default ProductPreview;
