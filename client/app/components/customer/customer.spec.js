import CustomerModule from './customer';
import CustomerController from './customer.controller';
import CustomerComponent from './customer.component';
import CustomerTemplate from './customer.html';

describe('Customer', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CustomerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CustomerController();
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
      expect(CustomerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = CustomerComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(CustomerTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(CustomerController);
    });
  });
});
