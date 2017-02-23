import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        redirectHome: function() {
            console.log('check');
            this.transitionTo('home');
        }
    }
});