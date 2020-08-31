import { AuthStore, WithAuth } from 'dunv-tsauth';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.global.css';
import { Index } from './components';
import { ErrorBoundary } from './components/errorBoundary';
import { GlobalStateProvider } from './components/globalStateProvider';
import { Login } from './components/login';
import { initFontawesome } from './fontAwesomeLib';

// Initialize icons
initFontawesome();

// this variable is set and injected at build-time
// check envVars.js for more information
declare const API_URL: string;

// Initialize dunv-tsauth
AuthStore.get().url = API_URL;
console.log('Using url', JSON.stringify(API_URL));

// Create root-div to render react-components into
const rootDiv = document.createElement('div');
rootDiv.id = 'root';
document.body.appendChild(rootDiv);

ReactDOM.render(
    <GlobalStateProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <Route path="/protected" exact component={WithAuth(Index, Login)} />
                <Route path="/" exact component={Index} />
            </ErrorBoundary>
        </BrowserRouter>
    </GlobalStateProvider>,
    rootDiv
);
