import Ember from 'ember';
export default Ember.Controller.extend({
    session: Ember.inject.service(),
    registered: false,
    passwords_match: false,
    actions: {
        confirmSame(password1, password2){
            let self = this;
            if (password1 === password2) {
                self.set('passwords_match', true);
                return true;
            }
            else {
                self.set('passwords_match', false);
                return false;
            }
        },
        register(){
            let self = this;
            if(self.get('passwords_match')) {
                 self.get('model').save().then(() => {
                        self.set('registered',1);
                     },(message) => {
                        self.set('internalError',message);
                        alertify.error('There was an error registering your account.');
                    });
            }
            else {
                alertify.error('Passwords do not match');
            }
        }
    }
});