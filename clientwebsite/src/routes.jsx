import { createBrowserRouter } from 'react-router-dom';

import { Error } from '@screens/common/Error/Error';
import { Signin, loader as signinLoader, action as signinAction } from '@screens/signin/Signin';
import { action as signoutAction } from '@screens/common/Header/components/Nav';
import { Clients, loader as clientsLoader, action as updateClientStatusAction } from '@screens/clients/Clients';
import { NotFound } from '@screens/notFound/NotFound';

const routes = [
  {
    path: '/',
    index: true,
    element: <Signin />,
    loader: signinLoader,
    action: signinAction,
    errorElement: <Error />,
  },
  {
    path: '/clients',
    element: <Clients />,
    loader: clientsLoader,
    action: updateClientStatusAction,
    errorElement: <Error />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/signout',
    action: signoutAction,
  },
];

export const router = createBrowserRouter(routes);
