import ChartsModule from './charts';
import ChartsController from './charts.controller';
import ChartsComponent from './charts.component';
import ChartsTemplate from './charts.html';

describe('Charts', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ChartsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ChartsController();
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
      expect(ChartsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ChartsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ChartsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ChartsController);
    });
  });
});
