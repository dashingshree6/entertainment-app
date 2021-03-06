import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import MovieDetail from "./views/MovieDetail/MovieDetail"
import FavoritePage from "./views/FavoritePage/FavoritePage"
import FeaturedPage from './views/FeaturedPage/FeaturedPage';
import FanFavoritesPage from './views/FanFavoritesPage/FanFavoritesPage';
import ComingPage from './views/ComingPage/ComingPage';
import ExplorePage from './views/ExplorePage/ExplorePage';
import TopGrossPage from './views/TopGrossPage/TopGrossPage';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/featured" component={Auth(FeaturedPage, null)} />
          <Route exact path="/fan" component={Auth(FanFavoritesPage, null)}/>
          <Route exact path="/coming" component={Auth(ComingPage, null)}/>
          <Route exact path="/top" component={Auth(TopGrossPage, null)}/>
          <Route exact path="/explore" component={Auth(ExplorePage, null)}/>
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/movie/:movieId" component={Auth(MovieDetail, null)} />
          <Route exact path="/favorite" component={Auth(FavoritePage, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
