import EarlyWarningBillModule from './early-warning-bill';
import EarlyWarningBillController from './early-warning-bill.controller';
import EarlyWarningBillComponent from './early-warning-bill.component';
import EarlyWarningBillTemplate from './early-warning-bill.html';

describe('EarlyWarningBill', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EarlyWarningBillModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EarlyWarningBillController();
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
      expect(EarlyWarningBillTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EarlyWarningBillComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EarlyWarningBillTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EarlyWarningBillController);
    });
  });
});
