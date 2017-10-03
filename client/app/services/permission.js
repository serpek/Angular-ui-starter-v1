'use strict';

class PermissionService {

    constructor() {
        this.name = "Permission Service";
        this.permissions = {};
        this.setPermission();
    }

    setPermission() {
        this.permissions = {
            group: "sales",
            channel: "customerAgent"
        }
    }

    getPermission() {
        return this.permissions;
    }

}

//PermissionService.$inject = ['$http', '$q', '$state', 'ConfigService', 'AuthService', '$location'];

export default PermissionService;