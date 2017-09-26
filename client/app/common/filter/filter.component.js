import template from './filter.html';
import controller from './filter.controller';
import './filter.scss';

let filterComponent = {
  bindings: {
    options: '='
  },
  template,
  controller
};

export default filterComponent;
