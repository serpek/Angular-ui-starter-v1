import activityGraphicComponent from './activity-graphic.component';

let activityGraphicModule = angular.module('activityGraphic', [])
.component('activityGraphic', activityGraphicComponent)
.name;

export default activityGraphicModule;
