import BrandBasedReportModule from './brand-based-report';
import BrandBasedReportController from './brand-based-report.controller';
import BrandBasedReportComponent from './brand-based-report.component';
import BrandBasedReportTemplate from './brand-based-report.html';

describe('BrandBasedReport', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BrandBasedReportModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BrandBasedReportController();
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
      expect(BrandBasedReportTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = BrandBasedReportComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(BrandBasedReportTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(BrandBasedReportController);
    });
  });
});
