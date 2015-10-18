import {Recipe, RecipeCollection} from 'models';
import {App} from 'components';

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'create' : 'create'
  },
  initialize(){
    this.newRecipe = new Recipe();
    this.recipes = new RecipeCollection();
    this.session = new Backbone.Model();


    this.listenTo(this, 'route', this.renderApp)
    this.listenTo(this.recipes, 'sync add remove', this.renderApp);
    this.listenTo(this.newRecipe, 'change', this.renderApp);

    this.listenTo(this,'route', () => clearInterval(this.interval))
},
create(){
return <h1>Hello</h1>
},

index(){
    this.recipes.fetch();
},

saveRecipe(){
/*  this.recipes.create(this.newRecipe.toJSON());
      this.newRecipe.clear().set(this.newRecipe.defaults);
    },
    */
  this.newRecipe.save().then(() => {
      this.recipes.add(this.newRecipe);
      this.newRecipe = new Recipe();
      this.renderApp
    });
},
 renderApp(){
  ReactDOM.render(
    <App
        recipes = {this.recipes.toJSON()}
        newRecipe = {this.newRecipe.toJSON()}
        OnSaveRecipe = {this.saveRecipe.bind(this)}
        />,
      document.getElementById('container'));
}
})

window.router = new AppRouter();
Backbone.history.start();
