import TargetCrmVisitModule from './target-crm-visit';
import TargetCrmVisitController from './target-crm-visit.controller';
import TargetCrmVisitComponent from './target-crm-visit.component';
import TargetCrmVisitTemplate from './target-crm-visit.html';

describe('TargetCrmVisit', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TargetCrmVisitModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TargetCrmVisitController();
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
      expect(TargetCrmVisitTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = TargetCrmVisitComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(TargetCrmVisitTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(TargetCrmVisitController);
    });
  });
});
