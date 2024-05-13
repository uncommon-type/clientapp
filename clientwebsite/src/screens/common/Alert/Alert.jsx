import PropTypes from 'prop-types';
import { ExclamationTriangleIcon as AlertIcon } from '@heroicons/react/24/outline';

export const Alert = ({ message }) => (
    <figure role='alert'>
        <AlertIcon />
        <p>{message}</p>
    </figure>
);

Alert.propTypes = {
    message: PropTypes.string.isRequired,
};
