import { useFetcher } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Select } from '@screens/common/Inputs/Select/Select';

const OPTIONS = [
    { value: 'Не в работе', label: 'Не в работе' },
    { value: 'В работе', label: 'В работе' },
    { value: 'Отказ', label: 'Отказ' },
    { value: 'Сделка закрыта', label: 'Сделка закрыта' }
];

export const StatusSelect = ({ initialStatus = 'Не в работе', id }) => {
    const fetcher = useFetcher();

    const handleChange = async (e) => {
        fetcher.submit(e.target.form, { method: 'PUT' });
    };

    return (
        <fetcher.Form method='put'>
            <input type='hidden' name='id' value={id} />
            <Select name='status' label='Изменить статус' id={id} value={initialStatus} onChange={handleChange} options={OPTIONS} />
        </fetcher.Form>
    );
};

StatusSelect.propTypes = {
    initialStatus: PropTypes.string,
    id: PropTypes.number.isRequired,
};