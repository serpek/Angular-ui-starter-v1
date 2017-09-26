import BidsForRegionsModule from './bids-for-regions';
import BidsForRegionsController from './bids-for-regions.controller';
import BidsForRegionsComponent from './bids-for-regions.component';
import BidsForRegionsTemplate from './bids-for-regions.html';

describe('BidsForRegions', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BidsForRegionsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BidsForRegionsController();
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
      expect(BidsForRegionsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = BidsForRegionsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BidsForRegionsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BidsForRegionsController);
    });
  });
});
