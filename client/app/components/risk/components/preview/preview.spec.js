import PreviewModule from './preview';
import PreviewController from './preview.controller';
import PreviewComponent from './preview.component';
import PreviewTemplate from './preview.html';

describe('Preview', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PreviewModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PreviewController();
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
      expect(PreviewTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = PreviewComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(PreviewTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(PreviewController);
    });
  });
});
