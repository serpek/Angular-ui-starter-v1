import TargetActualizationGraphicModule from './target-actualization-graphic';
import TargetActualizationGraphicController from './target-actualization-graphic.controller';
import TargetActualizationGraphicComponent from './target-actualization-graphic.component';
import TargetActualizationGraphicTemplate from './target-actualization-graphic.html';

describe('TargetActualizationGraphic', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TargetActualizationGraphicModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TargetActualizationGraphicController();
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
      expect(TargetActualizationGraphicTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = TargetActualizationGraphicComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(TargetActualizationGraphicTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(TargetActualizationGraphicController);
    });
  });
});
