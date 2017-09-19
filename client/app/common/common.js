import Header from './header/header';
import Footer from './footer/footer';

let commonModule = angular.module('app.common', [
        Header,
        Footer
    ])
    .name;

export default commonModule;