import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    let typeKey = primaryModelClass.modelName;
    let ret = {};
    ret[typeKey] = payload;
    return this._normalizeResponse(store, primaryModelClass, ret, id, requestType, true);
},
normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let typeKey = primaryModelClass.modelName;
    let ret = {};
    ret[typeKey] = payload;
    return this._normalizeResponse(store, primaryModelClass, ret, id, requestType, false);
}
});