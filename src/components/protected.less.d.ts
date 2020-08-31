declare namespace ProtectedLessNamespace {
    export interface IProtectedLess {
        marginTop: string;
    }
}

declare const ProtectedLessModule: ProtectedLessNamespace.IProtectedLess & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: ProtectedLessNamespace.IProtectedLess;
};

export = ProtectedLessModule;
