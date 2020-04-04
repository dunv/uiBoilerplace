import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppRouter } from './AppRouter';
import { AuthStore } from 'dunv-tsauth';

AuthStore.get().url = 'http://localhost:8080';
ReactDOM.render(<AppRouter />, document.getElementById('root'));
