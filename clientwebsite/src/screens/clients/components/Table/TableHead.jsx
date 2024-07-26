const TABLE_HEADERS = ['Name', 'Status', 'Account number', 'Insurance number', 'Date of birth'];

export const TableHead = () => (
  <thead>
    <tr>
      {TABLE_HEADERS.map(header => <th key={header}>{header}</th>)}
    </tr>
  </thead>
);
