import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import Pretender from 'pretender';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

const ms = [];

var server = new Pretender(function() {
  this.get('/ms', function(request) {
    const now = new Date();
    const nows = now.toString();

    const m = {
      id: 1,
      d: now,
      ds: nows,
      s: nows
    };
    const payload = [{
      type: 'm',
      id: 1,
      attributes: m
    }];
    //var all =  JSON.stringify(Object.keys(PHOTOS).map(function(k){return PHOTOS[k]}))
    return [200, { "Content-Type": "application/json" }, JSON.stringify({ data: payload })]
  });
  /*
    this.get('/photos/:id', function(request) {
      return [200, { "Content-Type": "application/json" }, JSON.stringify(PHOTOS[request.params.id])]
    });*/
});

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
