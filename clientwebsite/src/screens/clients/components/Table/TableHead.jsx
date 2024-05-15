const TABLE_HEADERS = ['ФИО', 'Статус', 'Номер счета', 'ИНН', 'Дата рождения'];

export const TableHead = () => (
    <thead>
        <tr>
            {TABLE_HEADERS.map(header => <th key={header}>{header}</th>)}
        </tr>
    </thead>
)