import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model() {
    return Ember.RSVP.hash({
        user: this.store.createRecord('user'),
        locations: this.store.findAll('location'),
        search_history_data: this.store.findAll('search-history')
    });
},
resetController(controller,isExiting) {
    if(isExiting){
        //controller.get('model').rollbackAttributes();
        controller.set('errorMessage', '');
    }
}

});