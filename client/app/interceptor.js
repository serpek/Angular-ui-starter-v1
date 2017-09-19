'use strict';

// Workaround for not losing the this binding in methods
let self;

class HttpInterceptor {
    constructor($rootScope, $location, $q, ConfigService, AuthService) {
        this.$rootScope = $rootScope;
        this.$location = $location;
        this.$q = $q;
        this.configService = ConfigService;
        this.authService = AuthService;

        this.API_LOGIN_URL = '/login/';

        self = this;
    }

    request(config) {
        var canceller;
        if (config.url.search(self.configService.apiBase) !== -1 && self.authService.isAuthenticated()) {
            config.headers.Authorization = `Token ${self.authService.getCredentials().token}`;
        } else if (config.url.search(self.configService.apiBase) !== -1 && config.url !== self.API_LOGIN_URL) {
            canceller = self.$q.defer();
            config.timeout = canceller.promise;
            canceller.resolve(`Cancelled request to ${config.url} because we do not have credentials`);
            self.authService.cleanCredentials();
            self.$location.url('/login');
        }
        return config;
    }

    requestError(config) {
        console.log("httpInterceptor -> requestError", config);
        return config;
    }

    response(res) {
        console.log("httpInterceptor -> response", res);
        return res;
    }

    responseError(rejection) {
        // if (rejection.config.url.search(self.configService.apiBase) !== -1 && rejection.status === 401) {
        //     // TODO: redirect parameter for login
        //     self.authService.cleanCredentials();
        //     self.$location.url('/login');
        // }
        return self.$q.reject(rejection);
    }

    static factory($rootScope, $location, $q, ConfigService, AuthService) {
        return new HttpInterceptor($rootScope, $location, $q, ConfigService, AuthService);
    }
}

HttpInterceptor.factory.$inject = ['$rootScope', '$location', '$q', 'ConfigService', 'AuthService'];

export default HttpInterceptor.factory;