import CommitteeActionsModule from './committee-actions';
import CommitteeActionsController from './committee-actions.controller';
import CommitteeActionsComponent from './committee-actions.component';
import CommitteeActionsTemplate from './committee-actions.html';

describe('CommitteeActions', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CommitteeActionsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CommitteeActionsController();
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
      expect(CommitteeActionsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = CommitteeActionsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(CommitteeActionsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(CommitteeActionsController);
    });
  });
});
