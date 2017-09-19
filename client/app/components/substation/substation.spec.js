import SubstationModule from './substation';
import SubstationController from './substation.controller';
import SubstationComponent from './substation.component';
import SubstationTemplate from './substation.html';

describe('Substation', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SubstationModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SubstationController();
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
      expect(SubstationTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = SubstationComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(SubstationTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(SubstationController);
    });
  });
});
