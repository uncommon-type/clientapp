import { useLocation } from 'react-router-dom';

import { links } from '@helpers/constants';

import { Button } from '@screens/common/Button/Button';

export const NotFound = () => {
  const location = useLocation();
  const from = location.state?.from || `${links.login}`;

  return (
    <main className='flow'>
      <h1>404</h1>
      <div className='flow'>
        <p>We're sorry but the page you&aposre looking for can't be found.</p>
        <Button
          to={from}
          className='with-icon'
          icon='arrow'
          label='Go back'
          aria-label='Go back'
        />
      </div>
    </main>
  );
};
