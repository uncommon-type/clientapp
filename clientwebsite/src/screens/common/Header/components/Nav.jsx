import { useSubmit, redirect } from 'react-router-dom';

import { links } from '@helpers/constants';
import { clearCache } from '@helpers/cache';

export const action = async () => {
    clearCache();
    return redirect(links.login);
}

export const Nav = () => {
    const submit = useSubmit();

    const handleSignout = () => {
        submit(null, { method: 'POST', action: '/signout' })
    }

    return (
        <nav>
            <button onClick={handleSignout}>
                <span>Выход</span>
            </button>
        </nav>
    );
};