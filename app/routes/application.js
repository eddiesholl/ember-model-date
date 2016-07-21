import Ember from 'ember';

var idCounter = 1;

function filterModels(m) {
  console.log(m.id);
  console.log(m.get('ds'));
  console.log(JSON.stringify(m.get('ds')));
  console.log(JSON.stringify(m.toJSON()));
  return true;
}

export default Ember.Route.extend({
  model: function() {
    //  this.createRecords();
    return this.store.filter('m', {}, filterModels);
  },

  createRecords: function() {
    const now = new Date();
    this.store.createRecord('m', {
      id: ++idCounter,
      d: now,
      ds: now.toString(),
      s: now.toString()
    });
    /*this.store.createRecord('m', {
      d: now,
      ds: now.toString(),
      s: now.toString()
    });*/
  },

  pushRecords: function() {
    const now = new Date();
    const nows = now.toString();
    console.log(nows);
    this.store.push({
      data: [{
        type: 'm',
        id: idCounter,
        attributes: {
          d: now,
          ds: nows,
          s: nows
        }
      }]
    });
  },

  actions: {
    create: function() {
      this.createRecords();
    },
    push: function() {
      this.pushRecords();
    },
    get: function() {
      this.store.query('m', {});
    }
  }
});
