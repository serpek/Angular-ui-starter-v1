import GeneralActivityModule from './general-activity';
import GeneralActivityController from './general-activity.controller';
import GeneralActivityComponent from './general-activity.component';
import GeneralActivityTemplate from './general-activity.html';

describe('GeneralActivity', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GeneralActivityModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GeneralActivityController();
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
      expect(GeneralActivityTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = GeneralActivityComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(GeneralActivityTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(GeneralActivityController);
    });
  });
});
