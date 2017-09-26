import EquipmentContractStatusModule from './equipment-contract-status';
import EquipmentContractStatusController from './equipment-contract-status.controller';
import EquipmentContractStatusComponent from './equipment-contract-status.component';
import EquipmentContractStatusTemplate from './equipment-contract-status.html';

describe('EquipmentContractStatus', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EquipmentContractStatusModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EquipmentContractStatusController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(EquipmentContractStatusTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EquipmentContractStatusComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EquipmentContractStatusTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EquipmentContractStatusController);
    });
  });
});
