import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ButtonInner } from './ButtonInner';

import styles from './button.module.css';

const buttonStyles = {
    size: {
        sm: 'btn-sm',
        lg: 'btn-lg'
    },
    variant: {
        primary: 'btn-primary',
        secondary: 'btn-secondary'
    },
};

export const Button = ({
    to,
    className = '',
    label = '',
    icon = '',
    size = '',
    variant = '',
    ...otherProps
}) => {
    const Tag = to ? Link : 'button';

    const sizeClass = size ? styles[buttonStyles.size[size]] : '';
    const variantClass = variant ? styles[buttonStyles.variant[variant]] : '';

    return (
        <Tag
            to={to}
            className={`button ${variantClass} ${sizeClass} ${className}`}
            {...otherProps}>
            <ButtonInner icon={icon} className={className} label={label} />
        </Tag>
    );
};

Button.propTypes = {
    to: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'lg']),
    variant: PropTypes.oneOf(['primary', 'secondary']),
};