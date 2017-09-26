import TsgNegativeInformationModule from './tsg-negative-information';
import TsgNegativeInformationController from './tsg-negative-information.controller';
import TsgNegativeInformationComponent from './tsg-negative-information.component';
import TsgNegativeInformationTemplate from './tsg-negative-information.html';

describe('TsgNegativeInformation', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TsgNegativeInformationModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TsgNegativeInformationController();
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
      expect(TsgNegativeInformationTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = TsgNegativeInformationComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(TsgNegativeInformationTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(TsgNegativeInformationController);
    });
  });
});
