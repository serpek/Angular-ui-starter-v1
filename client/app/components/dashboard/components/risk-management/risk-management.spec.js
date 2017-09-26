import RiskManagementModule from './risk-management';
import RiskManagementController from './risk-management.controller';
import RiskManagementComponent from './risk-management.component';
import RiskManagementTemplate from './risk-management.html';

describe('RiskManagement', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RiskManagementModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RiskManagementController();
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
      expect(RiskManagementTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = RiskManagementComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(RiskManagementTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(RiskManagementController);
    });
  });
});
