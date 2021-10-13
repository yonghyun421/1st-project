import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="botLogo">
          <p>MECOOK</p>
        </div>
        <div className="botDesc">
          <div className="botIntroduce">
            <div className="botIntroduceMenu">
              <Link to="/" className="footerBtn">
                미쿠크소개
              </Link>
              <Link to="/" className="footerBtn">
                이용약관
              </Link>
              <Link to="/" className="footerBtn">
                개인정보처리방침
              </Link>
            </div>
            <div className="botIntroduceSns">
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-square" />
              </a>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram-square" />
              </a>
            </div>
          </div>
          <div className="botEtc">
            <p>
              <span>(주)MECOOK</span>
              <span>대표자:미쿡인</span>
              <span>서울특별시 강남구 테헤란로 427</span>
              <span>사업자등록번호:123-45-67890</span>
            </p>
            <p>
              <span>통신판매업 신고번호:제2021-서울강남-1234호</span>
              <span>MECOOK대표전화:02-123-4567</span>
            </p>
            <p>
              <span>(주)엠이씨오오케이:1577-1234</span>
              <span>미쿠크:1234-1234</span>
            </p>
            <p>
              <span>미쿠크포인트:7777-7777</span>
            </p>
            <p id="botCopy">
              <span>
                <i className="far fa-copyright" />
                MECOOK.All Rights Reserved.
              </span>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
