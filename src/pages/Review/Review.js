import React, { Component } from 'react';
import './Review.scss';
import Repl from './Repl/Repl';
import ReviewBtn from './ReviewBtn/ReviewBtn';

class Review extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      review: '',
      product: '상품 id',
      replList: [],
      limit: 100,
      offset: 3,
    };
  }

  addRepl = e => {
    if (e.target.value.length > 100) {
      return e.target.value.substring(0, 100);
    }
    this.setState({
      review: e.target.value,
    });
  };

  enterBtn = e => {
    const { review } = this.state;
    if (e.key === 'Enter' && review.trim()) {
      this.addComment();
      e.target.value = null;
    } else if (e.key === 'Enter' && !review.trim()) {
      alert('리뷰를 입력해주세요.');
      e.target.value = '';
      e.target.focus();
    }
  };

  addComment = () => {
    // const { review, replList, product } = this.state;
    // let today = new Date();
    // let time = {
    //   year: today.getFullYear(),
    //   month: today.getMonth() + 1,
    //   date: today.getDate(),
    // };
    // // const cnt = replList.length + 1;
    // let timestring = `${time.year}/${time.month}/${time.date}`;
    // if (content.trim() === '' || content === '') {
    //   alert('리뷰를 입력해주세요.');
    //   return;
    // }
    // this.setState({
    //   replList: replList.concat({
    //     id: cnt,
    //     userName: userName,
    //     userDate: timestring,
    //     content: content.trim(),
    //   }),
    //   content: '',
    // });

    // id: 1,
    //     userName: this.state.userName,
    //     userDate: timestring,
    //     review: this.state.content.trim(),

    // review_id : 1
    // review : 내용
    // product : 상품 id
    // usesr :

    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.qywu0fsg1ylVPyh359QAGGFq66TM839qyr-W0_EZT-s';

    // fetch('http://10.58.2.208:8000/review/comment', {
      fetch('http://localhost:3000/data/reviewData.json', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        product: 1,
        review: this.state.review,
      }),
    })
      .then(res => res.json())
      // .then(data =>
      //   this.setState({
      //     replList: data.result.sort((a, b) => b.review_id - a.review_id),
      //   })
      // );

      .then(() => {
        // fetch('https://f960-211-106-114-186.ngrok.io/review/list/1')
          // fetch('http://localhost:3000/data/reviewData.json')
          .then(res => res.json())
          .then(data => {
            this.setState({
              replList: data.result
                // .slice(
                //   data.result.length - 3 * (this.state.count + 1),
                //   data.result.length
                // )
                .sort((a, b) => b.review_id - a.review_id),
            });
          })
          .catch(err => console.log('feeds', err));
      });
  };

  clearInput = () => {
    this.setState({
      review: '',
    });
  };

  addReplCnt = () => {
    if (this.state.count * 3 < this.state.replList.length) {
      this.setState({
        count: this.state.count + 1,
      });
      if (this.state.replList.length - 3 * (this.state.count + 1) < 0) {
        return;
      }
    }

    // fetch('https://f960-211-106-114-186.ngrok.io/review/list/1', {
    fetch('http://localhost:3000/data/reviewData.json', {
      method: 'GET',
      // headers: {
      //   'Content-type': 'application/json',
      //   Authorization: token,
      // },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          replList: data.result
            // .slice(
            //   data.result.length - 3 * (this.state.count + 1),
            //   data.result.length
            // )
            .sort((a, b) => b.review_id - a.review_id),
        });
      });
  };

  componentDidMount() {
    // const token =
    //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.qywu0fsg1ylVPyh359QAGGFq66TM839qyr-W0_EZT-s';

    // 'https://f960-211-106-114-186.ngrok.io/review/list/1'

    // fetch('https://f960-211-106-114-186.ngrok.io/review/list/1', {
    fetch('http://localhost:3000/data/reviewData.json', {
      method: 'GET',
      // headers: {
      //   'Content-type': 'application/json',
      //   Authorization: token,
      // },
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          replList: data.result
            // .slice(
            //   data.result.length - 3 * (this.state.count + 1),
            //   data.result.length
            // )
            .sort((a, b) => b.review_id - a.review_id),
        });
      });
  }

  // componentDidMount() {
  //   fetch('./data/reviewData.json', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       id: this.state.id,
  //       userName: this.state.userName,
  //       userDate: this.state.userDate,
  //       content: this.state.content.trim(),
  //     }),
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         alert('댓글이 추가 되었습니다.');
  //       }
  //     })
  //     .then(data => {
  //       this.setState({
  //         replList: data.result,
  //       });
  //     });
  // }

  render() {
    console.log(this.props.location.search);
    const { review, replList } = this.state;
    return (
      <section className="review">
        <div className="reviewTop">
          <label className="reviewTitle">
            REVIEW
            <span>({replList ? replList.length : 0})</span>
          </label>
          <div className="textArea">
            <div className="textInputBox">
              <textarea
                className="textInput"
                placeholder="통신예절에 어긋나는 글이나 상업적인 글, 타 사이트에 관련된 글은 관리자에 의해 사전 통보없이 삭제될 수 있습니다"
                onChange={this.addRepl}
                onKeyPress={this.enterBtn}
                value={review}
              />
              <div className="textInputLimit">{review.length}/100</div>
            </div>
            <button className="textInputBtn" onClick={this.addComment}>
              등록
            </button>
          </div>
          <ul className="reviewList">
            {/* <li>
              <div className="reviewContent">asdasfasf</div>
              <div className="reviewInfo">
                <p id="userId">asdasfasfas</p>
                <p id="userDate">2021/10/09</p>
              </div>
            </li> */}
            {replList &&
              replList.map(repl => {
                const { user, review, userDate, review_id, product } = repl;
                return (
                  <Repl
                    key={review_id}
                    review_id={review_id}
                    user={user}
                    review={review}
                    userDate={userDate}
                    product={product}
                  />
                );
              })}
          </ul>
        </div>
        {/* <ReviewBtn replList={replList} /> */}
        <div className="viewMore">
          <button className="viewMoreBtn" onClick={this.addReplCnt}>
            &nbsp;&nbsp;VIEW MORE&#8314;&nbsp;&nbsp;
          </button>
          <span>1</span>
          <span>/10</span>
        </div>
      </section>
    );
  }
}

export default Review;
