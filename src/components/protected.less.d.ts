declare namespace ProtectedLessModule {
    export interface IProtectedLess {
        marginTop: string;
    }
}

declare const ProtectedLessModule: ProtectedLessModule.IProtectedLess & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: ProtectedLessModule.IProtectedLess;
};

export = ProtectedLessModule;
