import React from 'react';
import Nav from '../../components/Nav/Nav';
import MainImg from './MainImg/MainImg';
import Best from './Best/Best';
import Brand from './Brand/Brand';
import Gourmet from './Gourmet/Gourmet';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <MainImg />
        <Best />
        <Brand />
        <Gourmet />
      </>
    );
  }
}

export default Main;
