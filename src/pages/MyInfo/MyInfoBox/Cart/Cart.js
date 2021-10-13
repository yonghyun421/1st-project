import React from 'react';
import CartItem from './CartItem/CartItem';
import EmptyCart from './EmptyCart/EmptyCart';
import './Cart.scss';

// detail page에서 this.props.productId로 받을 부분
//const productList = [];

const TOKEN = localStorage.getItem('token');

class Cart extends React.Component {
  state = {
    cartList: [],
    checkedItemList: [],
    totalPrice: 0,
  };

  getCartList = () => {
    if (TOKEN) {
      fetch('http://10.58.2.208:8000/cart', {
        method: 'GET',
        headers: {
          Authorization: TOKEN,
        },
      })
        .then(res => res.json())
        .then(data => {
          this.setState({ cartList: data.cart_info });
        });
    }
  };

  // 로그인한 유저의 장바구니 list GET
  componentDidMount() {
    // fetch('http://10.58.2.208:8000/cart', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: TOKEN,
    //   },
    //   body: JSON.stringify({
    //     product: '20',
    //     quantity: 1,
    //   }),
    // });
    this.getCartList();
  }

  // 로그인한 유저가 장바구니에 추가했을 때 다시 list GET
  componentDidUpdate(prevProps) {
    // productDetail 페이지에서 상품 추가 버튼 눌렀을 때, 이 컴포넌트로 갱신된 productList를 props로 보내줌
    if (prevProps.productList !== this.props.productList) {
      this.setState({ cartList: this.props.cartList });
    }
  }

  // 총 상품 가격 계산하는 함수
  getTotalPrice = () => {
    // 전체 장바구니 리스트에서 checkedItemList에 들어 있는 상품만 filter
    const orderList = this.state.cartList.filter(item =>
      this.state.checkedItemList.includes(item.id)
    );

    const orderPriceList = orderList.map(
      item => Number(item.price) * item.quantity
    );
    let totalPrice = 0;
    orderPriceList.map(item => (totalPrice += item));

    this.setState({ totalPrice: totalPrice });
  };

  // check한 아이템들 담는 배열 만들어서 체크한 상품 총가격 set
  handleItemCheck = itemId => {
    const getTotalPrice = () => {
      this.getTotalPrice();
    };

    // 이미 해당 itemId가 checkedItemList에 들어있으면 해당 상품 삭제
    if (this.state.checkedItemList.includes(itemId)) {
      const deleteItem = this.state.checkedItemList.filter(
        item => item !== itemId
      );

      this.setState({ checkedItemList: deleteItem }, getTotalPrice);
    } else {
      // checkedItemList에 없으면 해당 상품 추가
      const newItem = this.state.checkedItemList.concat(itemId);
      this.setState({ checkedItemList: newItem }, getTotalPrice);
    }
  };

  // allCheck했을 때 모든 상품 추가, allUnCheck했을 때 모든 상품 삭제하고 총 가격 set
  handleItemAllCheck = () => {
    const getTotalPrice = () => {
      this.getTotalPrice();
    };

    // checkedItemList 전체 상품 다들어있으면 비우기
    if (this.state.cartList.length === this.state.checkedItemList.length) {
      this.setState({ checkedItemList: [] }, getTotalPrice);
    } else {
      // checkedItemList 비어있으면 모두 넣기
      const allItem = [];
      this.state.cartList.map(item => allItem.push(item.id));
      this.setState({ checkedItemList: allItem }, getTotalPrice);
    }
  };

  // 장바구니 상품 삭제
  deleteCartItem = itemId => {
    const deletedCartList = this.state.cartList.filter(
      item => item.id !== itemId
    );

    this.setState({ cartList: deletedCartList });

    // 장바구니 삭제시 POST할 API
    fetch(`http://10.58.2.208:8000/cart/${itemId}`, {
      method: 'DELETE',
      headers: {
        Authorization: TOKEN,
      },
    });

    this.getCartList();
    this.getTotalPrice();
  };

  // 주문하기 버튼 클릭 시 포인트 차감
  orderProduct = () => {
    if (TOKEN) {
      // const restPoint = this.props.point - this.state.totalPrice;
      alert(`${this.state.totalPrice}원 차감되어 주문이 완료되었습니다!`);

      // 포인트 차감하고, 남은 포인트 서버에 보내는 API
      fetch(`http://10.58.2.208:8000/order`, {
        method: 'GET',
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      })
        .then(res => res.json())
        .then(data => this.setState({ cartList: [] }));
    } else {
      alert('로그인한 사용자만 이용할 수 있는 서비스입니다.');
    }
  };

  render() {
    return (
      <div className="cartContainer">
        <h1 className="cartTitle">Cart</h1>
        {this.state.cartList.length > 0 ? (
          <ul className="cartList">
            {this.state.cartList
              ? this.state.cartList.map(cartItem => {
                  const { id, image, category, product_name, price, quantity } =
                    cartItem;
                  return (
                    <CartItem
                      key={id}
                      id={id}
                      image={image}
                      category={category}
                      name={product_name}
                      price={price}
                      quantity={quantity}
                      isChecked={this.state.checkedItemList.includes(id)}
                      handleItemCheck={this.handleItemCheck}
                      deleteCartItem={this.deleteCartItem}
                    />
                  );
                })
              : null}
          </ul>
        ) : (
          <EmptyCart />
        )}
        <input
          className="checkAllBox"
          type="checkbox"
          name="checkAllBox"
          onChange={this.handleItemAllCheck}
        />
        <span className="checkAllLabel">전체선택</span>
        <div className="cartTotal">
          <p className="totalCount">
            TOTAL<span>{this.state.cartList.length}</span>
          </p>
          <p className="totalPrice">
            <i className="fas fa-won-sign"></i>
            {this.state.totalPrice
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </p>
        </div>
        <button className="btnOrder" onClick={this.orderProduct}>
          BUY NOW
        </button>
      </div>
    );
  }
}

export default Cart;
