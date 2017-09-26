import TargetCrmOfferedModule from './target-crm-offered';
import TargetCrmOfferedController from './target-crm-offered.controller';
import TargetCrmOfferedComponent from './target-crm-offered.component';
import TargetCrmOfferedTemplate from './target-crm-offered.html';

describe('TargetCrmOffered', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TargetCrmOfferedModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TargetCrmOfferedController();
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
      expect(TargetCrmOfferedTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = TargetCrmOfferedComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(TargetCrmOfferedTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(TargetCrmOfferedController);
    });
  });
});
