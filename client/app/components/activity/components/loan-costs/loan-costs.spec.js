import LoanCostsModule from './loan-costs';
import LoanCostsController from './loan-costs.controller';
import LoanCostsComponent from './loan-costs.component';
import LoanCostsTemplate from './loan-costs.html';

describe('LoanCosts', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LoanCostsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LoanCostsController();
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
      expect(LoanCostsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = LoanCostsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(LoanCostsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(LoanCostsController);
    });
  });
});
