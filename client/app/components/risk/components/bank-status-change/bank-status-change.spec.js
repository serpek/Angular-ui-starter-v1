import BankStatusChangeModule from './bank-status-change';
import BankStatusChangeController from './bank-status-change.controller';
import BankStatusChangeComponent from './bank-status-change.component';
import BankStatusChangeTemplate from './bank-status-change.html';

describe('BankStatusChange', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BankStatusChangeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BankStatusChangeController();
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
      expect(BankStatusChangeTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = BankStatusChangeComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BankStatusChangeTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BankStatusChangeController);
    });
  });
});
