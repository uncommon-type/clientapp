import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ButtonInner } from './ButtonInner';

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

    return (
        <Tag
            to={to}
            className={className}
            {...otherProps}>
            <ButtonInner icon={icon} className={className} label={label} />
        </Tag>
    );
};

Button.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'lg']),
    variant: PropTypes.oneOf(['primary', 'plane']),
};
