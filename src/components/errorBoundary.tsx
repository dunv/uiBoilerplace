import * as React from 'react';
import { errorBoundary, errorTitle, errorContent } from './errorBoundary.less';

type ErrorBoundaryState = {
    hasError: boolean;
    caughtError?: Error;
    errorInfo?: object;
};

export class ErrorBoundary extends React.Component {
    readonly state: ErrorBoundaryState = { hasError: false };

    componentDidCatch(error: Error, errorInfo: object) {
        this.setState({
            hasError: true,
            caughtError: error,
            errorInfo: errorInfo,
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <React.Fragment>
                    <div></div>
                    <div className={errorBoundary}>
                        <div className={errorTitle}>Something went wrong...</div>
                        <div className={errorContent}>
                            <pre>{this.state.caughtError?.stack}</pre>
                            <pre>{JSON.stringify(this.state.errorInfo)}</pre>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
        return this.props.children;
    }
}
