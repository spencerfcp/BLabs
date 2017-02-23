import DS from 'ember-data';

export default DS.Model.extend({
    rating: DS.attr('string'),
    snippet_text: DS.attr('string'),
    rating_img_url_small: DS.attr('string'),
    image_url: DS.attr('string'),
    url: DS.attr('string'),
    name: DS.attr('string')
});


