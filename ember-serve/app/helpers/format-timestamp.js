export function format_timestamp(timestamp) {
  return moment(timestamp).format('LL');
}

export default Ember.Helper.helper(format_timestamp);