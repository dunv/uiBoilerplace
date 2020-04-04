import * as React from 'react';
import { LocationStore } from 'dunv-tslocation';

export const Index: React.FC = () => {
    return (
        <div>
            <h2>Home</h2>
            <div>Location</div>
            <pre>{JSON.stringify(LocationStore.get().props)}</pre>
            <div>
                <button onClick={() => LocationStore.get().setPath('protected')}>go to protected</button>
                <button onClick={() => LocationStore.get().setPathAndSetParam('protected', 'hello', 'world')}>
                    go to protected and setHelloWorld
                </button>
                <button onClick={() => LocationStore.get().setPathAndSetParams('protected', { hello1: 'world1', hello2: 'world2' })}>
                    go to protected and setMultiple
                </button>
                <br />
                <br />
                <button onClick={() => console.log(LocationStore.get().getParams())}>getParams</button>
                <button onClick={() => LocationStore.get().setParam('hello', 'world')}>setHelloWorld</button>
                <button onClick={() => LocationStore.get().setParams({ hello1: 'world1', hello2: 'world2' })}>setMultiple</button>
                <button onClick={() => LocationStore.get().unsetParam('hello')}>unsetHelloWorld</button>
                <button onClick={() => LocationStore.get().unsetParams({ hello1: 'world1', hello2: 'world2' })}>unsetMultiple</button>
                <br />
                <br />
            </div>
        </div>
    );
};
