import ProfitTableModule from './profit-table';
import ProfitTableController from './profit-table.controller';
import ProfitTableComponent from './profit-table.component';
import ProfitTableTemplate from './profit-table.html';

describe('ProfitTable', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProfitTableModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProfitTableController();
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
      expect(ProfitTableTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ProfitTableComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ProfitTableTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ProfitTableController);
    });
  });
});
