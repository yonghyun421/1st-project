import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Review2 from './pages/Review/Review2';
import Nav from './components/Nav/Nav';
import ProductCategory from './pages/ProductCategory/ProductCategory';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import MinMenu from './pages/Main/MinMenu/MinMenu';
import Review from './pages/Review/Review';
import BestProduct from './pages/BestProduct/BestProduct';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Search from './pages/Search/Search';
import Signup from './pages/Signup/Signup';
import Footer from './components/Footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <MyInfo />
        <Switch>
          <Route exact path="/review" component={Review2} />
          <Route exact path="/product-category" component={ProductCategory} />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product-detail/:id" component={ProductDetail} />
          <Route exact path="/minmenu" component={MinMenu} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/best" component={BestProduct} />
          <Route exact path="/productdetail" component={ProductDetail} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
