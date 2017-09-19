import footerComponent from './footer.component';
import footerService from './footer.service';

let footerModule = angular.module('footer', [
    'ui.router'
])

.component('footer', footerComponent)
    .service(footerService)
    .name;

export default footerModule;