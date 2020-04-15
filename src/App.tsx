import { AuthStore, WithAuth } from 'dunv-tsauth';
import { LocationStore } from 'dunv-tslocation';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
import './app.global.css';
import { ErrorBoundary } from './components/errorBoundary';
import { initFontawesome } from './fontawesomeLib';
import { GlobalStateProvider } from './GlobalStateProvider';
import { Login } from './components/login';
import { Protected } from './components/protected';

// Initialize icons
initFontawesome();

// Initialize dunv-tsauth
AuthStore.get().url = 'http://localhost:8080';

ReactDOM.render(
    <GlobalStateProvider>
        <Router history={LocationStore.get().history}>
            <ErrorBoundary>
                <Route path="/" exact component={WithAuth(Protected, Login)} />
            </ErrorBoundary>
        </Router>
    </GlobalStateProvider>,
    document.getElementById('root')
);
