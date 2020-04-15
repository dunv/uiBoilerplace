import * as React from 'react';
import { createContainer } from 'react-tracked';

export interface GlobalState {
    showMenu: boolean;
}

const initialGlobalState: GlobalState = {
    showMenu: false,
};

const useValue = () => React.useReducer((state: GlobalState, newValue: GlobalState) => ({ ...state, ...newValue }), initialGlobalState);

const { Provider, useTracked } = createContainer(useValue);
export const GlobalStateProvider = Provider;
export const useGlobalState = useTracked;
