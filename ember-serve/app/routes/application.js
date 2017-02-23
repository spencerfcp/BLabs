import Ember from 'ember';
export default Ember.Route.extend({
    actions: {
        sendToIndex: function () {
            this.transitionTo('index');
        }
    }
});