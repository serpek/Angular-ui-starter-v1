import PenetrationModule from './penetration';
import PenetrationController from './penetration.controller';
import PenetrationComponent from './penetration.component';
import PenetrationTemplate from './penetration.html';

describe('Penetration', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PenetrationModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PenetrationController();
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
      expect(PenetrationTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = PenetrationComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(PenetrationTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(PenetrationController);
    });
  });
});
