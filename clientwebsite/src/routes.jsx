import { createBrowserRouter } from 'react-router-dom';
import { Error } from '@screens/common/Error/Error';
import { Signin, loader as signinLoader, action as signinAction } from '@screens/signin/Signin';
import { Clients } from '@screens/clients/Clients';
import { NotFound } from '@screens/notFound/NotFound';

const routes = [
    {
        path: '/',
        index: true,
        element: <Signin />,
        loader: signinLoader,
        action: signinAction,
        errorElement: <Error />
    },
    {
        path: '/clients',
        element: <Clients />,
        errorElement: <Error />
    },
    {
        path: '*',
        element: <NotFound />,
    }
];

export const router = createBrowserRouter(routes);