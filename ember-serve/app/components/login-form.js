import Ember from 'ember';
export default Ember.Component.extend( {
    session: Ember.inject.service(),
    routing: Ember.inject.service('-routing'),
    actions: {
        onOutsideClick: function() {
            Ember.$('#loginFormContainer').slideUp();
        },
        authenticate() {
            var credentials = this.getProperties('identification', 'password'),
                authenticator = 'authenticator:jwt';
            let self = this;
            this.get('session').authenticate(authenticator, credentials).then((json)=> {
                    var user_id = self.get('session').get('data.authenticated.user_id');
                    self.get('session').set('data.user_id', user_id);
                    Ember.$('#loginFormContainer').hide();
                    self.get("routing").transitionTo("home");
            },
            (message) => {
                    this.set('internalError', message.message);
                    alertify.error('Login or Password Incorrect');


        }
            );



}

}
});