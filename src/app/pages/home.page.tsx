import React from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Header, Body } from '../components';
// import { connect } from 'react-redux';

interface IProps extends RouteComponentProps, WithTranslation {}
interface IState {}

class Home extends React.Component<IProps, IState> {
	render() {
		const { t } = this.props;
		return (
			<div style={styles.container}>
				<Header />
				<Body>
					<h1>{t('home:display_title')}</h1>
					<button onClick={() => navigate('/profile')}>{t('home:action_to-profile')}</button>
				</Body>
			</div>
		);
	}
}
const styles = {
	container: {
		height: '100%',
		width: '100%',
	},
};

export default withTranslation(['home'])(Home);
