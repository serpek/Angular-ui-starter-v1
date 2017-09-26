import ExecutiveProceedingCustomersModule from './executive-proceeding-customers';
import ExecutiveProceedingCustomersController from './executive-proceeding-customers.controller';
import ExecutiveProceedingCustomersComponent from './executive-proceeding-customers.component';
import ExecutiveProceedingCustomersTemplate from './executive-proceeding-customers.html';

describe('ExecutiveProceedingCustomers', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ExecutiveProceedingCustomersModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ExecutiveProceedingCustomersController();
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
      expect(ExecutiveProceedingCustomersTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ExecutiveProceedingCustomersComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ExecutiveProceedingCustomersTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ExecutiveProceedingCustomersController);
    });
  });
});
