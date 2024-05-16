import PropTypes from 'prop-types';

import { TableBody } from './TableBody/TableBody';
import { TableHead } from './TableHead';

import styles from './table.module.css';

export const Table = ({ clients }) => (
    <section className={styles['table-group']}>
        <table>
            <TableHead />
            <TableBody clients={clients} />
        </table>
    </section>
)

Table.propTypes = {
    clients: PropTypes.array.isRequired,
};