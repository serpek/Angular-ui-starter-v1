import ActivityGraphicModule from './activity-graphic';
import ActivityGraphicController from './activity-graphic.controller';
import ActivityGraphicComponent from './activity-graphic.component';
import ActivityGraphicTemplate from './activity-graphic.html';

describe('ActivityGraphic', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ActivityGraphicModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ActivityGraphicController();
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
      expect(ActivityGraphicTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ActivityGraphicComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ActivityGraphicTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ActivityGraphicController);
    });
  });
});
