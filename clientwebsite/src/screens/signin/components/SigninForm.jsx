import { Form } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Input } from '@screens/common/Inputs/Input/Input';
import { SigninButton } from './SigninButton';

export const SigninForm = ({ isSigningIn, onChange }) => {
  return (
    <Form method='post' className='flow'>
      <Input
        label='email'
        type='email'
        autoCapitalize='none'
        autoCorrect='off'
        spellCheck='false'
        readOnly={isSigningIn}
        onChange={onChange}
      />
      <Input
        label='password'
        type='password'
        autoCapitalize='none'
        autoCorrect='off'
        spellCheck='false'
        readOnly={isSigningIn}
        onChange={onChange}
      />
      <div className='flow flow-space-l'>
        <SigninButton isSigningIn={isSigningIn} />
      </div>
    </Form>
  );
};

SigninForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  isSigningIn: PropTypes.bool.isRequired,
};
