import * as React from 'react';
import { login } from 'dunv-tsauth';
import { warningColor } from './login.less';
import { LocationStore } from 'dunv-tslocation';

export const Login: React.FC = () => {
    const [input, setInput] = React.useState({ user: '', password: '' });
    const [isLoading, setIsLoading] = React.useState(false);
    const [loginError, setLoginError] = React.useState('');

    const handleLogin: React.ReactEventHandler = async e => {
        e.preventDefault();
        const { user, password } = input;
        if (user && password) {
            setIsLoading(true);
            try {
                await login(user, password);
            } catch (error) {
                setLoginError(error);
                setIsLoading(false);
            }
        }
    };

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        setLoginError('');
        setInput({
            ...input,
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };

    return (
        <React.Fragment>
            <div>NOT LOGGED IN</div>
            {loginError && <div className={warningColor}>{loginError}</div>}
            <form>
                <input type="text" placeholder="user" name="user" autoComplete="name" onChange={handleInputChange}></input>
                <input type="password" placeholder="password" name="password" autoComplete="password" onChange={handleInputChange}></input>
                {(!isLoading && <button onClick={handleLogin}>Login</button>) || <button>...</button>}
            </form>
            <div>Location</div>
            <pre>{JSON.stringify(LocationStore.get().props)}</pre>
            <div>
                <button onClick={() => LocationStore.get().setPath('/')}>back</button>
            </div>
        </React.Fragment>
    );
};
