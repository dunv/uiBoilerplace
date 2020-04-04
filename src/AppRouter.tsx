import * as React from 'react';
import { Router, Route } from 'react-router-dom';

import { Login } from './components/login';
import { Protected } from './components/protected';
import { Index } from './components/index';
import { WithAuth } from 'dunv-tsauth';
import { LocationStore } from 'dunv-tslocation';

export const AppRouter: React.FC = () => {
    return (
        <Router history={LocationStore.get().history}>
            <div>
                <Route path="/" exact component={Index} />
                <Route path="/protected" exact component={WithAuth(Protected, Login)} />
            </div>
        </Router>
    );
};
