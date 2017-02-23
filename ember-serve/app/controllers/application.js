import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    didInsertElement : function() {

    },
    actions: {
        displayLogin: function() {
            Ember.$("#loginFormContainer").slideDown();
        },
        invalidateSession() {
    this.get('session').invalidate();
    this.get('session').set('user_id', null);
    this.get('session').set('home_nav_page', null);
    this.send('sendToIndex');
},


}
});

