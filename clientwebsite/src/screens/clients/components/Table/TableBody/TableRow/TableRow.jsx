import PropTypes from 'prop-types';

import { formatDate } from '@helpers/datetime';

import { StatusSelect } from './StatusSelect';

export const TableRow = ({ client }) => (
    <tr>
        <td>
            {`${client.lastName} ${client.firstName}`}
        </td>
        <td>
            <StatusSelect initialStatus={client.status} id={client.id} />
        </td>
        <td>
            {client.accountNumber}
        </td>
        <td>
            {client.insuranceNumber}
        </td>
        <td>
            {formatDate(client.dateOfBirth)}
        </td>
    </tr>
)

TableRow.propTypes = {
    client: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        accountNumber: PropTypes.string.isRequired,
        insuranceNumber: PropTypes.string.isRequired,
        dateOfBirth: PropTypes.string.isRequired,
    }).isRequired,
};