import production from './production';
import develop from './develop';

let environment = develop;
switch (process.env.REACT_APP_NODE_ENV) {
  case 'dev':
    environment = develop;
    break;
  case 'prod':
    environment = production;
    break;

  default:
    environment = develop;
    break;
}

export default Object.freeze(environment);
