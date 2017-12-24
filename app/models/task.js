import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    process: DS.belongsTo("process", {async: true, inverse: null}),

});
