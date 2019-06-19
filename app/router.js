import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount('contacts');
  this.route('sample', function() {
    this.route('child');
  });
  this.mount('customers');
});

export default Router;
