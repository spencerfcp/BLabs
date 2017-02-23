import Ember from 'ember';
import StandardActionsMixin from 'ember-serve/mixins/standard-actions';
import { module, test } from 'qunit';

module('Unit | Mixin | standard actions');

// Replace this with your real tests.
test('it works', function(assert) {
  let StandardActionsObject = Ember.Object.extend(StandardActionsMixin);
  let subject = StandardActionsObject.create();
  assert.ok(subject);
});
