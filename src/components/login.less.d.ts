declare namespace LoginLessNamespace {
    export interface ILoginLess {
        warningColor: string;
    }
}

declare const LoginLessModule: LoginLessNamespace.ILoginLess & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: LoginLessNamespace.ILoginLess;
};

export = LoginLessModule;
