import PropTypes from 'prop-types';

import { TableBody } from './TableBody/TableBody';
import { TableHead } from './TableHead';

export const Table = ({ clients }) => (
    <section>
        <table>
            <TableHead />
            <TableBody clients={clients} />
        </table>
    </section>
)

Table.propTypes = {
    clients: PropTypes.array.isRequired,
};