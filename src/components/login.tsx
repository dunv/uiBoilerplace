import { login } from 'dunv-tsauth';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { warningColor } from './login.less';

export const Login: React.FC = () => {
    const [input, setInput] = React.useState({ user: '', password: '' });
    const [isLoading, setIsLoading] = React.useState(false);
    const [loginError, setLoginError] = React.useState('');
    const history = useHistory();

    const handleLogin: React.ReactEventHandler = async (e) => {
        e.preventDefault();
        const { user, password } = input;
        if (user && password) {
            setIsLoading(true);
            try {
                await login(user, password);
            } catch (error) {
                console.log(error);
                setLoginError(JSON.stringify(error));
                setIsLoading(false);
            }
        }
    };

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
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
            <div>
                <button onClick={() => history.push('/')}>back</button>
            </div>
        </React.Fragment>
    );
};
