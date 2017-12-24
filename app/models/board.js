import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  processes: DS.hasMany("process", {async: true, inverse: null}),
  timestamp: DS.attr()
});