import template from './filter.html';
import controller from './filter.controller';
import './filter.scss';

let filterComponent = {
  bindings: {
    params: '='
  },
  template,
  controller
};

export default filterComponent;
