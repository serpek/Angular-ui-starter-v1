import NewCustomerAcquisitionModule from './new-customer-acquisition';
import NewCustomerAcquisitionController from './new-customer-acquisition.controller';
import NewCustomerAcquisitionComponent from './new-customer-acquisition.component';
import NewCustomerAcquisitionTemplate from './new-customer-acquisition.html';

describe('NewCustomerAcquisition', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewCustomerAcquisitionModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewCustomerAcquisitionController();
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
      expect(NewCustomerAcquisitionTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = NewCustomerAcquisitionComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(NewCustomerAcquisitionTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(NewCustomerAcquisitionController);
    });
  });
});
