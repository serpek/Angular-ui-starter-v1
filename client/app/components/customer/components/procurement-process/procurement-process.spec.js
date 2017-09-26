import ProcurementProcessModule from './procurement-process';
import ProcurementProcessController from './procurement-process.controller';
import ProcurementProcessComponent from './procurement-process.component';
import ProcurementProcessTemplate from './procurement-process.html';

describe('ProcurementProcess', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProcurementProcessModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProcurementProcessController();
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
      expect(ProcurementProcessTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ProcurementProcessComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProcurementProcessTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProcurementProcessController);
    });
  });
});
