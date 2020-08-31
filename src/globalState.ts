import { AuthStore, UAuthProps } from 'dunv-tsauth';
import { remove as removeCookie, set as setCookie } from 'es-cookie';
import * as React from 'react';
import { createContainer } from 'react-tracked';

export const COOKIE_NAME_GLOBAL_STATE_PROPERTY = 'globalState_property';

export interface GlobalState {
    showMenu: boolean;
    uauth: UAuthProps;
    property: any;
}

export interface GlobalStateUpdate {
    showMenu?: boolean;
    uauth?: UAuthProps;
    property?: any;
}

const initialGlobalState: GlobalState = {
    showMenu: false,
    uauth: AuthStore.get().props,
    property: { initial: true },
};

const useValue = () =>
    React.useReducer((state: GlobalState, newValue: GlobalStateUpdate) => {
        if (newValue.property) {
            setCookie(COOKIE_NAME_GLOBAL_STATE_PROPERTY, JSON.stringify(newValue.property), { expires: 365 });
        }
        return { ...state, ...newValue };
    }, initialGlobalState);

export const clearCookies = () => {
    removeCookie(COOKIE_NAME_GLOBAL_STATE_PROPERTY);
};

const { Provider, useUpdate, useSelector } = createContainer(useValue);
export const dispatchGlobalState = useUpdate;
export const useGlobalState = useSelector;
export const GlobalStateContainer = Provider;
