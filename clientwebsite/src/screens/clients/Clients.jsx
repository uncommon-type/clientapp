import { Header } from '@screens/common/Header/Header';
import { Nav } from '@screens/common/Header/components/Nav';
import { User } from '@screens/common/Header/components/User/User';

export const Clients = () => (
    <Header>
        <div>
            <User />
            <Nav />
        </div>
    </Header>
);