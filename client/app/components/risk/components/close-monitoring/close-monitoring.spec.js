import CloseMonitoringModule from './close-monitoring';
import CloseMonitoringController from './close-monitoring.controller';
import CloseMonitoringComponent from './close-monitoring.component';
import CloseMonitoringTemplate from './close-monitoring.html';

describe('CloseMonitoring', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CloseMonitoringModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CloseMonitoringController();
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
      expect(CloseMonitoringTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = CloseMonitoringComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(CloseMonitoringTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(CloseMonitoringController);
    });
  });
});
