import TargetCrmBranchNegativeModule from './target-crm-branch-negative';
import TargetCrmBranchNegativeController from './target-crm-branch-negative.controller';
import TargetCrmBranchNegativeComponent from './target-crm-branch-negative.component';
import TargetCrmBranchNegativeTemplate from './target-crm-branch-negative.html';

describe('TargetCrmBranchNegative', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TargetCrmBranchNegativeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TargetCrmBranchNegativeController();
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
      expect(TargetCrmBranchNegativeTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = TargetCrmBranchNegativeComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(TargetCrmBranchNegativeTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(TargetCrmBranchNegativeController);
    });
  });
});
