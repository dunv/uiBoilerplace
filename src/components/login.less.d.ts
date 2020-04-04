declare namespace LoginLessModule {
    export interface ILoginLess {
        warningColor: string;
    }
}

declare const LoginLessModule: LoginLessModule.ILoginLess & {
    /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
    locals: LoginLessModule.ILoginLess;
};

export = LoginLessModule;
