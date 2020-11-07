import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, navigate } from "@reach/router";
import { withTranslation, WithTranslation } from "react-i18next";
import { Header, Body } from "../components";
import { AppState, AppDispatch } from "../redux/store";
import { fetchUsers } from "../redux/actions/user.action";
import UserCard from "../components/user.card.component";

type IHomeProps = RouteComponentProps &
  WithTranslation &
  ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;
interface IHomeState {}

class Home extends React.Component<IHomeProps, IHomeState> {
  componentDidMount() {
    this.props.getUsers();
  }

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
          {this.props.list.map((user) => (
            <UserCard user={user} />
          ))}
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
  return { isLoading: state.user.loading, list: state.user.list };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation(["home"])(Home));
