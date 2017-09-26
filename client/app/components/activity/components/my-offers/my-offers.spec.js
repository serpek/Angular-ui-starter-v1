import MyOffersModule from './my-offers';
import MyOffersController from './my-offers.controller';
import MyOffersComponent from './my-offers.component';
import MyOffersTemplate from './my-offers.html';

describe('MyOffers', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyOffersModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyOffersController();
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
      expect(MyOffersTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = MyOffersComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(MyOffersTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MyOffersController);
    });
  });
});
