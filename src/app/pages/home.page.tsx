import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, navigate } from "@reach/router";
import { withTranslation, WithTranslation } from "react-i18next";
import { Header, Body } from "../components";
import { AppState, AppDispatch } from "../redux/store";

interface IHomeProps extends RouteComponentProps, WithTranslation {}
interface IHomeState {}

class Home extends React.Component<IHomeProps, IHomeState> {
  render() {
    const { t } = this.props;
    return (
      <div style={styles.container}>
        <Header />
        <Body>
          <h1>{t("home:display_title")}</h1>
          <button onClick={() => navigate("/profile")}>
            {t("home:action_to-profile")}
          </button>
        </Body>
      </div>
    );
  }
}
const styles = {
  container: {
    height: "100%",
    width: "100%",
  },
};

const mapStateToProps = (state: AppState, ownProps: any) => {
  return { isLoading: state.user.loading };
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  // buyProduct: item => dispatch(actions.buyProduct(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation(["home"])(Home));
