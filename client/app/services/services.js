import PermissionService from './permission';
import AuthService from './authentication';
import LoginService from './login';

let servicesModule = angular.module('app.services', [])
    .service('AuthService', AuthService)
    .service('LoginService', LoginService)
    .service('PermissionService', PermissionService)
    .name;

export default servicesModule;