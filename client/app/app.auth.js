'use strict';

const TOKEN_KEY = 'auth.token';

class AuthService {
    constructor($window) {
        this.$window = $window;
    }

    isAuthenticated() {
        var credentials;
        credentials = this.getCredentials();

        return !!credentials.token;
    }

    setCredentials(token) {
        this.$window.localStorage.setItem(TOKEN_KEY, token);
    }

    cleanCredentials() {
        this.$window.localStorage.removeItem(TOKEN_KEY);
    }

    getCredentials() {
        var token;
        token = this.$window.localStorage.getItem(TOKEN_KEY);
        return {
            token: token
        };
    }
}

AuthService.$inject = ['$window'];

export default AuthService;