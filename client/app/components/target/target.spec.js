import TargetModule from './target';
import TargetController from './target.controller';
import TargetComponent from './target.component';
import TargetTemplate from './target.html';

describe('Target', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TargetModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TargetController();
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
      expect(TargetTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = TargetComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(TargetTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(TargetController);
    });
  });
});
