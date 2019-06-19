import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  // Define your engine's route map here
  this.route('list', { path: '/' }, function() {
    this.route('details', { path: '/details' });
  });
});
