import CreditProcessModule from './credit-process';
import CreditProcessController from './credit-process.controller';
import CreditProcessComponent from './credit-process.component';
import CreditProcessTemplate from './credit-process.html';

describe('CreditProcess', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CreditProcessModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CreditProcessController();
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
      expect(CreditProcessTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = CreditProcessComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(CreditProcessTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(CreditProcessController);
    });
  });
});
