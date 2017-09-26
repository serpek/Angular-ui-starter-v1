import StartExecutiveProceedingModule from './start-executive-proceeding';
import StartExecutiveProceedingController from './start-executive-proceeding.controller';
import StartExecutiveProceedingComponent from './start-executive-proceeding.component';
import StartExecutiveProceedingTemplate from './start-executive-proceeding.html';

describe('StartExecutiveProceeding', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StartExecutiveProceedingModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StartExecutiveProceedingController();
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
      expect(StartExecutiveProceedingTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = StartExecutiveProceedingComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(StartExecutiveProceedingTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(StartExecutiveProceedingController);
    });
  });
});
