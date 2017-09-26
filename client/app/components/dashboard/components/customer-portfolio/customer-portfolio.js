import customerPortfolioComponent from './customer-portfolio.component';

let customerPortfolioModule = angular.module('customerPortfolio', [])
.component('customerPortfolio', customerPortfolioComponent)
.name;

export default customerPortfolioModule;
