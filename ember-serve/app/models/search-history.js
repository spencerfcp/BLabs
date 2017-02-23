import DS from 'ember-data';

export default DS.Model.extend({
    created_at: DS.attr('string'),
    searchterm: DS.attr('string'),
    searchlocation: DS.attr('string')
});


