import MobileaseUseRatioModule from './mobilease-use-ratio';
import MobileaseUseRatioController from './mobilease-use-ratio.controller';
import MobileaseUseRatioComponent from './mobilease-use-ratio.component';
import MobileaseUseRatioTemplate from './mobilease-use-ratio.html';

describe('MobileaseUseRatio', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MobileaseUseRatioModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MobileaseUseRatioController();
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
      expect(MobileaseUseRatioTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = MobileaseUseRatioComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(MobileaseUseRatioTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MobileaseUseRatioController);
    });
  });
});
