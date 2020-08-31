declare namespace ErrorBoundaryLessNamespace {
    export interface IErrorBoundaryLess {
        contentWrapper: string;
        errorBoundary: string;
        errorContent: string;
        errorTitle: string;
    }
}

declare const ErrorBoundaryLessModule: ErrorBoundaryLessNamespace.IErrorBoundaryLess & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: ErrorBoundaryLessNamespace.IErrorBoundaryLess;
};

export = ErrorBoundaryLessModule;
