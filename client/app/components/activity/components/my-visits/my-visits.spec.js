import MyVisitsModule from './my-visits';
import MyVisitsController from './my-visits.controller';
import MyVisitsComponent from './my-visits.component';
import MyVisitsTemplate from './my-visits.html';

describe('MyVisits', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyVisitsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyVisitsController();
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
      expect(MyVisitsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = MyVisitsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(MyVisitsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MyVisitsController);
    });
  });
});
