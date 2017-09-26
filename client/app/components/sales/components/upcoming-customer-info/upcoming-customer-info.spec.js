import UpcomingCustomerInfoModule from './upcoming-customer-info';
import UpcomingCustomerInfoController from './upcoming-customer-info.controller';
import UpcomingCustomerInfoComponent from './upcoming-customer-info.component';
import UpcomingCustomerInfoTemplate from './upcoming-customer-info.html';

describe('UpcomingCustomerInfo', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UpcomingCustomerInfoModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UpcomingCustomerInfoController();
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
      expect(UpcomingCustomerInfoTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = UpcomingCustomerInfoComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(UpcomingCustomerInfoTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(UpcomingCustomerInfoController);
    });
  });
});
