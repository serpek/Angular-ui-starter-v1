import OngoingCampaignsModule from './ongoing-campaigns';
import OngoingCampaignsController from './ongoing-campaigns.controller';
import OngoingCampaignsComponent from './ongoing-campaigns.component';
import OngoingCampaignsTemplate from './ongoing-campaigns.html';

describe('OngoingCampaigns', () => {
  let $rootScope, makeController;

  beforeEach(window.module(OngoingCampaignsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new OngoingCampaignsController();
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
      expect(OngoingCampaignsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = OngoingCampaignsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(OngoingCampaignsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(OngoingCampaignsController);
    });
  });
});
