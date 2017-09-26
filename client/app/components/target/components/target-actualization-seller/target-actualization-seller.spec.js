import TargetActualizationSellerModule from './target-actualization-seller';
import TargetActualizationSellerController from './target-actualization-seller.controller';
import TargetActualizationSellerComponent from './target-actualization-seller.component';
import TargetActualizationSellerTemplate from './target-actualization-seller.html';

describe('TargetActualizationSeller', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TargetActualizationSellerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TargetActualizationSellerController();
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
      expect(TargetActualizationSellerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = TargetActualizationSellerComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(TargetActualizationSellerTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(TargetActualizationSellerController);
    });
  });
});
