import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";
import Register from "./components/elements/Register";
import Login from "./components/elements/Login";
import UserList from "./components/elements/Userlist";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute
            exact
            path="/register"
            component={Register}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/login"
            component={Login}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/home"
            component={UserList}
          />
        </Switch>
      )}
    />
  );
};

export default App;
