import {Recipe, RecipeCollection} from 'models';
import {App} from 'components';

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize(){
    this.newRecipe = new Recipe();
    this.recipes = new RecipeCollection();

    
    this.listenTo(this.recipes, 'sync add remove',this.renderApp);
    this.listenTo(this.newRecipe, 'change',this.renderApp);
},
  index(){
    this.recipes.fetch();
},
saveRecipe(){
  this.newRecipe.save().then(() => {
      this.recipes.add(this.newRecipe);
      this.newRecipe = new Recipe();
      this.renderApp();
})
},
 renderApp(){
  ReactDOM.render(
    <App
        recipes = {this.recipes.toJSON()}
        newRecipe = {this.newRecipe.toJSON()}
        saveRecipe = {this.saveRecipe.bind(this)}
        />,
      document.getElementById('container'));
}
})

window.router = new AppRouter();
Backbone.history.start();
