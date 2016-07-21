import DS from 'ember-data';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  d: DS.attr('date'),
  ds: DS.attr('date'),
  s: DS.attr('string')
});
