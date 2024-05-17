import { useSubmit, redirect } from 'react-router-dom';

import { links } from '@helpers/constants';
import { clearCache } from '@helpers/cache';

import { Button } from '@screens/common/Button/Button';

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
            <Button onClick={handleSignout}
                variant='secondary'
                size='lg'
                label='Выход'
                aria-label='Выход'
            />
        </nav>
    );
};