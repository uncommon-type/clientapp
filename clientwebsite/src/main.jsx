import React from 'react';
import ReactDOM from 'react-dom/client';

export const App = () => (
    <h1>Hello world</h1>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);