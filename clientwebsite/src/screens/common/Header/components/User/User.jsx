import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline'

import { links } from '@helpers/constants';

export const User = ({ username }) => (
    <NavLink to={links.clients.list} aria-label='Мой профиль'>
        <UserCircleIcon aria-hidden='true' focusable='false' />
        {username}
    </NavLink>
);

User.propTypes = {
    username: PropTypes.string.isRequired,
};