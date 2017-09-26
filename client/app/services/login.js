'use strict';

class LoginService {
    constructor($http, $q, $state, Config, AuthService, $location) {
        this.$http = $http;
        this.$q = $q;
        this.$state = $state;
        this.$location = $location;
        this.Config = Config;
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
        var xhr = this.$http.post(`${this.Config.apiBase}/login`, {
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

LoginService.$inject = ['$http', '$q', '$state', 'Config', 'AuthService', '$location'];

export default LoginService;