import EarlyWarningChequeModule from './early-warning-cheque';
import EarlyWarningChequeController from './early-warning-cheque.controller';
import EarlyWarningChequeComponent from './early-warning-cheque.component';
import EarlyWarningChequeTemplate from './early-warning-cheque.html';

describe('EarlyWarningCheque', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EarlyWarningChequeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EarlyWarningChequeController();
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
      expect(EarlyWarningChequeTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EarlyWarningChequeComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EarlyWarningChequeTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EarlyWarningChequeController);
    });
  });
});
