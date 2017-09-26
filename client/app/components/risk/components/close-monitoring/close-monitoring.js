import closeMonitoringComponent from './close-monitoring.component';

let closeMonitoringModule = angular.module('closeMonitoring', [])
.component('closeMonitoring', closeMonitoringComponent)
.name;

export default closeMonitoringModule;