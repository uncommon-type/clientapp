import PropTypes from 'prop-types';

import styles from './input.module.css';

export const Input = ({ type = 'text', label, className = '', ...otherProps }) => (
    <div className='form-item'>
        <label htmlFor={label}>
            {label}
        </label>
        <input id={label} type={type} name={label} {...otherProps} className={className} />
    </div>
);

Input.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
};
