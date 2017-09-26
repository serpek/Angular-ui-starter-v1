import previewComponent from './preview.component';

let previewModule = angular.module('preview', [])
.component('preview', previewComponent)
.name;

export default previewModule;