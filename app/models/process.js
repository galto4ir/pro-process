import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    board: DS.belongsTo("board", {async: true, inverse: null}),
    tasks: DS.hasMany("task", {async: true, inverse: null})
});
