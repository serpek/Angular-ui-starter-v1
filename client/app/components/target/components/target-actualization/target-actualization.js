import targetActualizationComponent from './target-actualization.component';

let targetActualizationModule = angular.module('targetActualization', [])
.component('targetActualization', targetActualizationComponent)
.name;

export default targetActualizationModule;