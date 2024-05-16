import PropTypes from 'prop-types';
import { ExclamationTriangleIcon as AlertIcon } from '@heroicons/react/24/outline';

import styles from './alert.module.css';

export const Alert = ({ message }) => (
    <figure role='alert' className={`${styles['alert']} with-icon`}>
        <AlertIcon />
        <p>{message}</p>
    </figure>
);

Alert.propTypes = {
    message: PropTypes.string.isRequired,
};
