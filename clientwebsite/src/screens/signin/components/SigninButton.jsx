import PropTypes from 'prop-types';

import { Button } from '@screens/common/Button/Button';

export const SigninButton = ({ isSigningIn }) => {
    const label = isSigningIn ? 'Выполняется вход...' : 'Вход';

    return (
        <Button
            variant='primary'
            size='lg'
            icon={isSigningIn ? 'spinner' : null}
            label={label}
            aria-label={label}
            disabled={isSigningIn}
        />
    );
};

SigninButton.propTypes = {
    isSigningIn: PropTypes.bool.isRequired,
};