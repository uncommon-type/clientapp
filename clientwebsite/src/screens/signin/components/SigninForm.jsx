import { Input } from '@screens/common/Inputs/Input/Input';
import { SigninButton } from './SigninButton';

export const SigninForm = () => (
    <form>
        <Input label='email' type='email' />
        <Input label='пароль' type='password' />
        <div>
            <SigninButton />
        </div>
    </form>
)
