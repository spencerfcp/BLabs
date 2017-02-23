import Ember from 'ember';
export default Ember.Controller.extend({
    session: Ember.inject.service(),
    ajax: Ember.inject.service(),
    init: function() {
        var currentSearchPage = this.get('session').get('data.home_nav_page');
        if(currentSearchPage === 1) {
            this.set('home_nav_page_1', 1);
            this.get('session').set('data.home_nav_page', 1);
        }

        else if(currentSearchPage === 2) {
            this.set('home_nav_page_2', 1);
            this.get('session').set('data.home_nav_page', 2);

        }
        else if(currentSearchPage === 3) {
            this.set('home_nav_page_3', 1);
            this.get('session').set('data.home_nav_page', 3);

        }
        else {
            this.set('home_nav_page_1', 1);
            this.get('session').set('data.home_nav_page', 1);
        }

    },
    actions: {
        confirmSame(password1, password2) {
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
        update_member() {
            let self = this;
            if(self.get('passwords_match')) {
                var token = self.get('session').get('data.authenticated.token');
                var password = Ember.$('#account_password').val();
                this.get('ajax').request( "http://homestead.app/api/update-member",
                    {method: 'POST', data: {password: password, token:token}}).then((json) =>{
                        alertify.success('Updated!');
                }, () => {
                        this.set('errorMessage',"Registration failed.");
                        alertify.success('Error Updating Your Profile!');
                });
            }
            else {
                alertify.error('Passwords must match.');
            }

        },
        submitSearch() {
            let self = this;
            var search_term = this.get('search_term');
            var search_location = this.get('search_location');
            var search_sort = Ember.$('#location_sort_by').val();
            var token = self.get('session').get('data.authenticated.token');
            this.get('ajax').request( "http://homestead.app/api/load-locations",
                {method: 'GET', data: {token:token, search_sort: search_sort, search_location: search_location, search_term: search_term}}).then((json) =>{
                     var model = self.get('model.locations');
                     var new_json = jsonNormalizeResponse(json, 'location');
                     model.store.unloadAll('location');
                     model.store.pushPayload(new_json);
                }, (message) => { console.log(message);alertify.error('There was an error submitting this search.');}
            );
        },
        updateSearchHistory() {
            let self = this;
            self.setProperties({
                home_nav_page_1: false,
                home_nav_page_2: 1,
                home_nav_page_3: false
            });
            this.get('session').set('data.home_nav_page', 2);
            var token = self.get('session').get('data.authenticated.token');
            this.get('ajax').request( "http://homestead.app/api/load-search-histories",
                {method: 'GET', data: {token:token}}).then((json) =>{
                    var model = self.get('model.search_history_data');
                    var new_json = jsonNormalizeResponse(json, 'search-history');
                    model.store.unloadAll('search-history');
                    model.store.pushPayload(new_json);
                }, (message) => { console.log(message);alertify.error('There was an error submitting this search.');}
            );
        },
        navClick(id){
            let self = this;
            if (id === 'my_account') {
                self.setProperties({
                    home_nav_page_1: 1,
                    home_nav_page_2: false,
                    home_nav_page_3: false

                });
                this.get('session').set('data.home_nav_page', 1);
            }
            else if (id === 'search_places') {
                self.setProperties({
                    home_nav_page_1: false,
                    home_nav_page_2: false,
                    home_nav_page_3: 1
                });
                this.get('session').set('data.home_nav_page', 3);
            }
        }
    }

});
