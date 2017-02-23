import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});


Router.map(function() {
  this.route('index');
  this.route('users');
  this.route('register');
  this.route('aboutus');
  this.route('home');
  this.route('root', { path: "" });
  this.route('missing', { path: "/*path" });
});




export default Router;
