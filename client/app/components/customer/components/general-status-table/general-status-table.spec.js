import GeneralStatusTableModule from './general-status-table';
import GeneralStatusTableController from './general-status-table.controller';
import GeneralStatusTableComponent from './general-status-table.component';
import GeneralStatusTableTemplate from './general-status-table.html';

describe('GeneralStatusTable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GeneralStatusTableModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GeneralStatusTableController();
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
      expect(GeneralStatusTableTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = GeneralStatusTableComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(GeneralStatusTableTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(GeneralStatusTableController);
    });
  });
});
