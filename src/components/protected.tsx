import * as React from 'react';
import { logout, renewRefreshToken, ConnectToAuthProps, apiRequest } from 'dunv-tsauth';
import { LocationStore } from 'dunv-tslocation';
import { marginTop } from './protected.less';

export const Protected: React.FC<any> = (props: ConnectToAuthProps) => {
    const [fetchedData, setFetchedData] = React.useState({});

    const handleLogout: React.ReactEventHandler = () => {
        logout();
    };

    const handleTestRequest: React.ReactEventHandler = async () => {
        const res = await (await apiRequest()).get('withAuthorization');
        setFetchedData(res);
    };

    const handleRefreshToken: React.ReactEventHandler = async () => {
        renewRefreshToken();
    };

    return (
        <React.Fragment>
            <div>Protected</div>
            <pre>{JSON.stringify(props.uauth, undefined, 4)}</pre>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className={marginTop}>
                <button onClick={handleTestRequest}>TestRequest</button>
            </div>
            <div>
                <button onClick={handleRefreshToken}>renewRefreshToken</button>
            </div>
            <pre>{JSON.stringify(fetchedData, undefined, 4)}</pre>
            <br />
            <br />
            <div>Location</div>
            <pre>{JSON.stringify(LocationStore.get().props)}</pre>
            <div>
                <button onClick={() => LocationStore.get().setPath('/')}>back</button>
            </div>
        </React.Fragment>
    );
};
