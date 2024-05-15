import PropTypes from 'prop-types';

export const Header = ({ children }) => <header>{children}</header>;

Header.propTypes = {
    children: PropTypes.node.isRequired,
};