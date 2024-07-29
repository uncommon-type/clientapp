import PropTypes from 'prop-types';

import { Icon } from '@screens/common/Icon/Icon';

export const ButtonInner = ({ icon = '', label = '' }) =>
  icon
    ? (
        <>
          {label}
          <Icon icon={icon} aria-hidden='true' focusable='false' />
        </>
      )
    : (
        label
      );

ButtonInner.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
};
