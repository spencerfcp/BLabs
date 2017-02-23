import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    //session: Ember.inject.service(),
    model() {
        var user_id = this.get('session').get('data.authenticated.user_id');
    console.log(user_id);
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
