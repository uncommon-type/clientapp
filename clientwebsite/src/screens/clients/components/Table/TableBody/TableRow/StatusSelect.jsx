import { useFetcher } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Select } from '@screens/common/Inputs/Select/Select';

const OPTIONS = [
  { value: 'Inactive', label: 'Inactive' },
  { value: 'In progress', label: 'In progress' },
  { value: 'Rejected', label: 'Rejected' },
  { value: 'Deal closed', label: 'Deal closed' },
];

export const StatusSelect = ({ initialStatus = 'Inactive', id }) => {
  const fetcher = useFetcher();

  const handleChange = async (e) => {
    fetcher.submit(e.target.form, { method: 'PUT' });
  };

  return (
    <fetcher.Form method='put'>
      <input type='hidden' name='id' value={id} />
      <Select name='status' label='Change status' id={id} value={initialStatus} onChange={handleChange} options={OPTIONS} />
    </fetcher.Form>
  );
};

StatusSelect.propTypes = {
  initialStatus: PropTypes.string,
  id: PropTypes.number.isRequired,
};
