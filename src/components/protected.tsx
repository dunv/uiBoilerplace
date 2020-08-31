import { apiRequest, ConnectToAuthProps, logout, renewRefreshToken } from 'dunv-tsauth';
import { parseParams } from 'dunv-tslocation';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { marginTop } from './protected.less';

export const Protected: React.FC<any> = (props: ConnectToAuthProps) => {
    const [fetchedData, setFetchedData] = React.useState({});
    const history = useHistory();

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
            <pre>{JSON.stringify(parseParams(history.location.search))}</pre>
            <div>
                <button onClick={() => history.push('/')}>back</button>
            </div>
        </React.Fragment>
    );
};
