import nonTradedBranchesComponent from './non-traded-branches.component';

let nonTradedBranchesModule = angular.module('nonTradedBranches', [])
.component('nonTradedBranches', nonTradedBranchesComponent)
.name;

export default nonTradedBranchesModule;