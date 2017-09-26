import salableEquipmentComponent from './salable-equipment.component';

let salableEquipmentModule = angular.module('salableEquipment', [])
.component('salableEquipment', salableEquipmentComponent)
.name;

export default salableEquipmentModule;