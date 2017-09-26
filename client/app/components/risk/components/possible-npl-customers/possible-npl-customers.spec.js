import PossibleNplCustomersModule from './possible-npl-customers';
import PossibleNplCustomersController from './possible-npl-customers.controller';
import PossibleNplCustomersComponent from './possible-npl-customers.component';
import PossibleNplCustomersTemplate from './possible-npl-customers.html';

describe('PossibleNplCustomers', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PossibleNplCustomersModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PossibleNplCustomersController();
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
      expect(PossibleNplCustomersTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = PossibleNplCustomersComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(PossibleNplCustomersTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(PossibleNplCustomersController);
    });
  });
});
