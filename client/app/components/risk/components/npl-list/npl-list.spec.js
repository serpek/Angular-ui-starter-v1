import NplListModule from './npl-list';
import NplListController from './npl-list.controller';
import NplListComponent from './npl-list.component';
import NplListTemplate from './npl-list.html';

describe('NplList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NplListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NplListController();
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
      expect(NplListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = NplListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(NplListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(NplListController);
    });
  });
});
