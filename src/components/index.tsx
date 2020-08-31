import { assignParams, parseParams } from 'dunv-tslocation';
import * as React from 'react';
import { useHistory } from 'react-router-dom';

export const Index: React.FC = () => {
    const history = useHistory();

    return (
        <div>
            <h2>Home</h2>
            <div>Location</div>
            <pre>{JSON.stringify(parseParams(history.location.search))}</pre>
            <div>
                <button onClick={() => history.push('protected')}>go to protected</button>
                <button onClick={() => history.push(`protected?${assignParams(history.location.search, { add: { hello: 'world' } })}`)}>
                    go to protected and setHelloWorld
                </button>
            </div>
        </div>
    );
};
