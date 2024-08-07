import { useState, useEffect } from 'react';
import { redirect, useActionData, useNavigation } from 'react-router-dom';

import { authenticate } from '@helpers/auth';
import { getUserInput } from '@helpers/form';
import { isValid } from '@helpers/form';
import { requestToken } from '@network/network';
import { writeToCache } from '@helpers/cache';
import { links } from '@helpers/constants';

import { SigninForm } from './components/SigninForm.jsx';
import { Alert } from '@screens/common/Alert/Alert';

export const loader = () => {
  const authData = authenticate();

  if (!authData) {
    return null;
  }

  return redirect(links.clients.list);
};

export const action = async ({ request }) => {
  const { email: login, password } = await getUserInput(request);

  if (!isValid({ login, password })) {
    return { message: 'Sign in failed' };
  }

  try {
    const { token, userName } = await requestToken({ login, password });

    writeToCache({ token, userName });
    return redirect(links.clients.list);
  }

  catch (err) {
    return { message: 'Sign in failed' };
  }
};

export const Signin = () => {
  const actionData = useActionData() || {};
  const [error, setError] = useState(actionData);
  const { formData, state } = useNavigation();
  const isLoading = formData != null && state === 'loading';

  useEffect(() => {
    if (Object.keys(actionData).length > 0) {
      setError(actionData);
    }
  }, [actionData]);

  const handleChange = () => {
    setError({});
  };

  return (
    <main className='flow'>
      <section className='grid-center'>
        <div className='flow flow-space-xs'>
          <h1>Enter your email and password</h1>
          <SigninForm isSigningIn={isLoading} onChange={handleChange} />
          {Object.keys(error).length !== 0 ? <Alert message={error.message || 'Something went wrong'} /> : null}
        </div>
      </section>
    </main>
  );
};
