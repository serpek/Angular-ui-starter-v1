import RiskModule from './risk';
import RiskController from './risk.controller';
import RiskComponent from './risk.component';
import RiskTemplate from './risk.html';

describe('Risk', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RiskModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RiskController();
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
      expect(RiskTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = RiskComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(RiskTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(RiskController);
    });
  });
});
