declare namespace ErrorBoundaryLessModule {
    export interface IErrorBoundaryLess {
        contentWrapper: string;
        errorBoundary: string;
        errorContent: string;
        errorTitle: string;
    }
}

declare const ErrorBoundaryLessModule: ErrorBoundaryLessModule.IErrorBoundaryLess & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: ErrorBoundaryLessModule.IErrorBoundaryLess;
};

export = ErrorBoundaryLessModule;
