import PropTypes from 'prop-types';

import { Select } from '@screens/common/Inputs/Select/Select';

const OPTIONS = [
    { value: 'Не в работе', label: 'Не в работе' },
    { value: 'В работе', label: 'В работе' },
    { value: 'Отказ', label: 'Отказ' },
    { value: 'Сделка закрыта', label: 'Сделка закрыта' }
];

export const StatusSelect = ({ initialStatus = 'Не в работе' }) => (
    <form>
        <Select name='status' label='Изменить статус' defaultValue={initialStatus} options={OPTIONS} />
    </form>
);


StatusSelect.propTypes = {
    initialStatus: PropTypes.string,
};