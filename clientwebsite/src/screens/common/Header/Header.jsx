import PropTypes from 'prop-types';

import styles from './header.module.css';

export const Header = ({ children }) => <header className={styles.header}>{children}</header>;

Header.propTypes = {
    children: PropTypes.node.isRequired,
};