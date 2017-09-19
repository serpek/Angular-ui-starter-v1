import ActivityModule from './activity';
import ActivityController from './activity.controller';
import ActivityComponent from './activity.component';
import ActivityTemplate from './activity.html';

describe('Activity', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ActivityModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ActivityController();
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
      expect(ActivityTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ActivityComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ActivityTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ActivityController);
    });
  });
});
