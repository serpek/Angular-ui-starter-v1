import Header from './header/header';
import Footer from './footer/footer';
import Filter from './filter/filter';

let commonModule = angular.module('app.common', [
        Header,
        Footer,
        Filter
    ])
    .name;

export default commonModule;