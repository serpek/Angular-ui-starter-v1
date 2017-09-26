import ContractualProcessModule from './contractual-process';
import ContractualProcessController from './contractual-process.controller';
import ContractualProcessComponent from './contractual-process.component';
import ContractualProcessTemplate from './contractual-process.html';

describe('ContractualProcess', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContractualProcessModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContractualProcessController();
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
      expect(ContractualProcessTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ContractualProcessComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ContractualProcessTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ContractualProcessController);
    });
  });
});
