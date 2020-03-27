import React from 'react';
import { useTranslation } from 'react-i18next';
import { primary } from '../utils/colors';
interface IProps {}
const Header: React.FunctionComponent<IProps> = () => {
	const { t, i18n } = useTranslation('common');
	return (
		<div style={styles.container}>
			<button onClick={() => i18n.changeLanguage(t('common:lang'))}>{t('common:language')}</button>
		</div>
	);
};

const styles = {
	container: {
		height: 50,
		backgroundColor: primary,
		padding: 10,
	},
};

export default Header;
