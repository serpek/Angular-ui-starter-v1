import RefundFromCreditsModule from './refund-from-credits';
import RefundFromCreditsController from './refund-from-credits.controller';
import RefundFromCreditsComponent from './refund-from-credits.component';
import RefundFromCreditsTemplate from './refund-from-credits.html';

describe('RefundFromCredits', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RefundFromCreditsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RefundFromCreditsController();
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
      expect(RefundFromCreditsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = RefundFromCreditsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(RefundFromCreditsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(RefundFromCreditsController);
    });
  });
});
