class LoginController {
    constructor($state, LoginService, $location) {
        this.name = 'login';
        this.$state = $state;
        this.$location = $location;

        let tokenkey = this.$location.search();

        this.loginService = LoginService;
        this.loginInProgress = false;

        this.loginService.login("a", "b", tokenkey).then(
            () => {
                this.loginInProgress = false;
                this.$state.go('dashboard');
            },
            (error) => {
                this.loginInProgress = false;
                this.showErrors(error);
            }
        );
    }

    showErrors(error) {
        this.errors = error;
    }

}

LoginController.$inject = ['$state', 'LoginService', '$location'];

export default LoginController;