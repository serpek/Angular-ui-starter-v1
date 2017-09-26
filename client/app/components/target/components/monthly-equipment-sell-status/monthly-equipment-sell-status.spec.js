import MonthlyEquipmentSellStatusModule from './monthly-equipment-sell-status';
import MonthlyEquipmentSellStatusController from './monthly-equipment-sell-status.controller';
import MonthlyEquipmentSellStatusComponent from './monthly-equipment-sell-status.component';
import MonthlyEquipmentSellStatusTemplate from './monthly-equipment-sell-status.html';

describe('MonthlyEquipmentSellStatus', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MonthlyEquipmentSellStatusModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MonthlyEquipmentSellStatusController();
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
      expect(MonthlyEquipmentSellStatusTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = MonthlyEquipmentSellStatusComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(MonthlyEquipmentSellStatusTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MonthlyEquipmentSellStatusController);
    });
  });
});
