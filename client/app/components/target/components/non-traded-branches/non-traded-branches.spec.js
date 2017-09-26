import NonTradedBranchesModule from './non-traded-branches';
import NonTradedBranchesController from './non-traded-branches.controller';
import NonTradedBranchesComponent from './non-traded-branches.component';
import NonTradedBranchesTemplate from './non-traded-branches.html';

describe('NonTradedBranches', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NonTradedBranchesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NonTradedBranchesController();
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
      expect(NonTradedBranchesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = NonTradedBranchesComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(NonTradedBranchesTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(NonTradedBranchesController);
    });
  });
});
