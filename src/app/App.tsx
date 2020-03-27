import React from "react";
import { Redirect, Router } from "@reach/router";
import { Provider } from "react-redux";
import { Home, Profile } from "./pages";
import store from "./redux/store";
import { useTranslation } from "react-i18next";
import moment from "moment";

const RTLHandler: React.FunctionComponent<{}> = () => {
  const { i18n } = useTranslation();
  document.body.setAttribute("dir", i18n.dir(i18n.language));
  moment.locale(i18n.language);
  return null;
};

const App = () => {
  return (
    <>
      <RTLHandler />
      <Provider store={store}>
        <Router>
          <Redirect from={"/"} to={"/home"} />
          <Home path="/home" />
          <Profile path="/profile" />
        </Router>
      </Provider>
    </>
  );
};

export default App;
