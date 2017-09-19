import headerComponent from './header.component';
import headerService from './header.service';

let headerModule = angular.module('header', [
    'ui.router'
])

.component('header', headerComponent)
    .service(headerService)
    .name;

export default headerModule;