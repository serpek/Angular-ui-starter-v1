'use strict';

class LoginService {
    constructor($http, $q, $state, ConfigService, AuthService, $location) {
        this.$http = $http;
        this.$q = $q;
        this.$state = $state;
        this.$location = $location;
        this.configService = ConfigService;
        this.authService = AuthService;

        if (AuthService.isAuthenticated() &&
            ($state.current.name === 'dashboard' || $state.current.name === 'login')) {
            $state.go('dashboard');
        }

        if (!AuthService.isAuthenticated() && $state.current.name !== 'dashboard' && $state.current.name !== 'login') {
            $state.go('login');
        }
    }

    login(username, password, tokenkey) {
        /*jshint camelcase: false */
        this.authService.cleanCredentials();
        var xhr = this.$http.post(`${this.configService.apiBase}/login`, {
            email: username,
            password: password,
            token: tokenkey
        });
        xhr.then(res => {
            this.authService.setCredentials(res.data.token);
        });
        xhr.catch(err => {
            this.$q.reject(err);
        });
        return xhr;
    }

    logout() {
        this.authService.cleanCredentials();
        this.$location.url("http://mobilease.com");
        //this.$state.go('login');
    }
}

LoginService.$inject = ['$http', '$q', '$state', 'ConfigService', 'AuthService', '$location'];

export default LoginService;