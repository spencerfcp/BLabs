function jsonNormalizeResponse(json_array, model_key) {
    var api_response = {};
    api_response[model_key] = [];
    for (var i = 0; i < json_array.length; i++) {
        var item = json_array[i];
        api_response[model_key].push(item);

    }
    return api_response;
}