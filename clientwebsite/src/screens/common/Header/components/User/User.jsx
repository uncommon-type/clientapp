import { NavLink } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline'

import { links } from '@helpers/constants';

export const User = () => (
    <NavLink to={links.clients.list} aria-label='Мой профиль'>
        <UserCircleIcon aria-hidden='true' focusable='false' />
    </NavLink>
);