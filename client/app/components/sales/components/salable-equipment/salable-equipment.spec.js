import SalableEquipmentModule from './salable-equipment';
import SalableEquipmentController from './salable-equipment.controller';
import SalableEquipmentComponent from './salable-equipment.component';
import SalableEquipmentTemplate from './salable-equipment.html';

describe('SalableEquipment', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SalableEquipmentModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SalableEquipmentController();
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
      expect(SalableEquipmentTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = SalableEquipmentComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SalableEquipmentTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(SalableEquipmentController);
    });
  });
});
