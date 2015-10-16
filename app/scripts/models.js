$.ajaxSetup({
  headers: {
  "X-Parse-Application-Id" : "J0jv7L6rNzE8hnQRwKMYNmDRvY2q9QWGMdxYbMk2",
  "X-Parse-REST-API-key": "xgaqcAUWGrkFEJNldo9VLeqRLw4zmfrVp9UMWpni",
  }
});

var Recipe = Backbone.Model.extend({
  idAttribute: "objectId",
  urlRoot: "https://api.parse.com/1/classes/Recipe",


defaults: function(){
  return {
    name: "",
    ingredients: [],

  }
},
toJSON(){
  var result = _.clone(this.attributes);
    result.id = result.objectId;
    delete result.objectId;
    return result;
  }
})

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: "https://api.parse.com/1/classes/Recipe",
  parse(response){
    return response.results
  }
});

export default {Recipe, RecipeCollection};
