import BusinessModelModule from './business-model';
import BusinessModelController from './business-model.controller';
import BusinessModelComponent from './business-model.component';
import BusinessModelTemplate from './business-model.html';

describe('BusinessModel', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BusinessModelModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BusinessModelController();
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
      expect(BusinessModelTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = BusinessModelComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BusinessModelTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BusinessModelController);
    });
  });
});
