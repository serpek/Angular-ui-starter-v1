import TargetCrmTargetCustomerModule from './target-crm-target-customer';
import TargetCrmTargetCustomerController from './target-crm-target-customer.controller';
import TargetCrmTargetCustomerComponent from './target-crm-target-customer.component';
import TargetCrmTargetCustomerTemplate from './target-crm-target-customer.html';

describe('TargetCrmTargetCustomer', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TargetCrmTargetCustomerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TargetCrmTargetCustomerController();
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
      expect(TargetCrmTargetCustomerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = TargetCrmTargetCustomerComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(TargetCrmTargetCustomerTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(TargetCrmTargetCustomerController);
    });
  });
});
