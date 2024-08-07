import { redirect, useLoaderData } from 'react-router-dom';

import { authenticate } from '@helpers/auth';
import { getClients } from '@network/clients';
import { getUserInput } from '@helpers/form';
import { updateClient } from '@network/clients';
import { links } from '@helpers/constants';

import { Header } from '@screens/common/Header/Header';
import { Nav } from '@screens/common/Header/components/Nav';
import { User } from '@screens/common/Header/components/User/User';
import { ScrollMessage } from './components/ScrollMessage/ScrollMessage';
import { Table } from './components/Table/Table';

export const loader = async () => {
  const authData = authenticate();

  if (!authData) {
    return redirect(links.login);
  }

  const { token, userName } = authData;

  try {
    const clients = await getClients(token);
    return { userName, clients };
  }
  catch (err) {
    throw new Response('', {
      status: err.status || 500,
      statusText: err.statusText || 'Something went wrong',
    });
  }
};

export const action = async ({ request }) => {
  const authData = authenticate();

  if (!authData) {
    return redirect(links.login);
  }

  const { token } = authData;
  const { id, status } = await getUserInput(request);
  const clientId = parseInt(id);

  if (!clientId || !status) {
    throw new Response('', {
      status: 400,
      statusText: 'Bad request',
    });
  }

  try {
    await updateClient({ id: clientId, status }, token);
    return null;
  }
  catch (err) {
    throw new Response('', {
      status: err.status || 500,
      statusText: err.statusText || 'Something went wrong',
    });
  }
};

export const Clients = () => {
  const { userName, clients } = useLoaderData() || { userName: '', clients: [] };

  return (
    <>
      <Header>
        <div className='cluster'>
          <User username={userName} />
          <Nav />
        </div>
      </Header>
      <main className='flow'>
        {clients.length > 0
          ? (
              <>
                <h1>Clients</h1>
                <ScrollMessage />
                <Table clients={clients} />
              </>
            )
          : <p className='gap-top'>No actively tracked clients</p>}
      </main>
    </>
  );
};
