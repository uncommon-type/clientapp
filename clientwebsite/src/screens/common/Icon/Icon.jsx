import PropTypes from 'prop-types';

import { ArrowIcon } from './images/ArrowIcon';
import { SpinnerIcon } from './images/SpinnerIcon';

const ICON_MAP = {
    arrow: ArrowIcon,
    spinner: SpinnerIcon,
};

export const Icon = ({ icon = '', ...props }) => {
    const IconComponent = ICON_MAP[icon];

    return <IconComponent {...props} />;
};

Icon.propTypes = {
    icon: PropTypes.string,
};
