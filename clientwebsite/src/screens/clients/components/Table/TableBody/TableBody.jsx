import PropTypes from 'prop-types';

import { TableRow } from './TableRow/TableRow';

export const TableBody = ({ clients }) => (
  <tbody>
    {Object.values(clients).map((client) => {
      return (
        <TableRow key={client.id} client={client} />
      );
    })}
  </tbody>
);

TableBody.propTypes = {
  clients: PropTypes.array.isRequired,
};
