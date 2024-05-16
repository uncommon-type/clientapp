import PropTypes from 'prop-types';

import styles from './select.module.css';

export const Select = ({ id, label = '', showLabel = false, options, name = '', ...otherProps }) => (
    <>
        <label htmlFor={id} className={showLabel ? '' : 'sr-only'}>
            {label}
        </label>
        <select id={id} name={name} {...otherProps} className={styles.select}>
            {options.map(({ label }) => (
                <option key={label} value={label}>
                    {label}
                </option>
            ))}
        </select>
    </>
);

Select.propTypes = {
    id: PropTypes.number,
    label: PropTypes.string,
    showLabel: PropTypes.bool,
    options: PropTypes.array.isRequired,
    name: PropTypes.string,
};
