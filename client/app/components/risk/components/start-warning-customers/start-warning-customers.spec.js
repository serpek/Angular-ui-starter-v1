import StartWarningCustomersModule from './start-warning-customers';
import StartWarningCustomersController from './start-warning-customers.controller';
import StartWarningCustomersComponent from './start-warning-customers.component';
import StartWarningCustomersTemplate from './start-warning-customers.html';

describe('StartWarningCustomers', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StartWarningCustomersModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StartWarningCustomersController();
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
      expect(StartWarningCustomersTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = StartWarningCustomersComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(StartWarningCustomersTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(StartWarningCustomersController);
    });
  });
});
