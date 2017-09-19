// /* ngInject */
class HttpInterceptor {
    constructor($rootScope, $location, $q) {
        this.$rootScope = $rootScope;
        this.$location = $location;
        this.$q = $q;
    }

    request(config) {
        console.log("httpInterceptor -> request", config);
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

    responseError(res) {
        console.log("httpInterceptor -> responseError", res);
        return this.$q.reject(res);
    }

    static factory($rootScope, $location, $q) {
        return new HttpInterceptor($rootScope, $location, $q);
    }
}

HttpInterceptor.factory.$inject = ['$rootScope', '$location', '$q'];

export default HttpInterceptor.factory;