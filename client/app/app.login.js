'use strict';

class LoginService {
    constructor($http, $q, $state, ConfigService, AuthService) {
        this.$http = $http;
        this.$q = $q;
        this.$state = $state;
        this.configService = ConfigService;
        this.authService = AuthService;

        if (AuthService.isAuthenticated() && ($state.current.name === 'home' || $state.current.name === 'login')) {
            $state.go('home');

            console.log("isAuthenticated");
        }

        if (!AuthService.isAuthenticated() && $state.current.name !== 'home' && $state.current.name !== 'login') {
            $state.go('login');

            console.log("not Authenticated");
        }
    }

    login(username, password) {
        /*jshint camelcase: false */
        this.authService.cleanCredentials();
        var xhr = this.$http.get(`${this.configService.apiBase}`);
        xhr.success(data => {
            this.authService.setCredentials(data.token);
            this.signalsService.emit('renooit:login', username);
        });
        xhr.catch(error => this.$q.reject(error.data.non_field_errors[0]));
        return xhr;
    }

    logout() {
        return this.$http.get(`${this.configService.apiBase}/logout/`)
            .success(() => {
                this.authService.cleanCredentials();
                this.$state.go('login');
            })
            .catch(error => this.$q.reject(error.data));
    }
}

LoginService.$inject = ['$http', '$q', '$state', 'ConfigService', 'AuthService'];

export default LoginService;