import { AuthStore, UAuthProps } from 'dunv-tsauth';
import * as React from 'react';
import { dispatchGlobalState, GlobalStateContainer } from '../globalState';

export const COOKIE_NAME_GLOBAL_STATE = 'timeTracking_globalState';

export const GlobalStateProvider: React.FC = (props: any) => {
    return (
        <GlobalStateContainer>
            <AddState>{props.children}</AddState>
        </GlobalStateContainer>
    );
};

const AddState: React.FC<{}> = (props: any) => {
    const dispatch = dispatchGlobalState();
    React.useEffect(() => {
        return AuthStore.get().addSubscriber((props: UAuthProps) => dispatch({ uauth: props }));
    });

    return props.children;
};
