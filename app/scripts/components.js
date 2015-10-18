
var App = React.createClass({
  propTypes: {
    recipes: React.PropTypes.array.isRequired,
    //editRecipe: React.PropTypes.func.isRequired,
    OnSaveRecipe: React.PropTypes.func.isRequired
    //newRecipe: React.PropTypes.object.isRequired
  },
  getInitialState(){
    return {
    newRecipe: {Name: "", ingredients: [], Servings: 0},
    recipes: this.props.recipes
    }
  },
  addNewRecipe(recipe){
    recipe.key = Date.now();
    console.log(recipe)
    this.setState({
      recipes: this.state.recipes.concat([recipe])
    })

  },
  render(){
  return (
    <div>
      <nav>
      </nav>
      <ul>
        {
          this.props.recipes.map((r) => <Recipe recipe={r} key={r.id}/>)
        }
      </ul>
      <RecipeForm initialRecipe={this.state.newRecipe} OnSaveRecipe={this.addNewRecipe}></RecipeForm>
    </div>
  );
  }
});


var Recipe = React.createClass({
  propTypes: {
  recipe : React.PropTypes.object.isRequired
},
getInitialState(){
  return {
  servings: this.props.recipe.Servings,
  updatedservings: this.props.recipe.Servings
  }
},
updateServings(e){
e.preventDefault();
this.setState({
  updatedservings: this.state.servings
})
},
handleChange(e){
  this.setState({
    servings: e.target.value
  });
},
render(){
  return (
      <div>
          <form className="input-form" onSubmit={this.updateServings}>
            <h3 className="makes"><i>Making</i></h3>
            <input className="serving-input" type="number" value={this.state.servings} onChange={this.handleChange}/>
            <h4 className="servings"><i>servings</i></h4>
            <button className="adjust-serving" type="submit">Adjust Recipe</button>
          </form>
    <h1>{this.props.recipe.Name}</h1>
      <ul className="recipe-ul">
        {this.props.recipe.ingredients.map((a) => {
          return (
            <li key={_.uniqueId('recipe')}>
            <input className="radio" type="radio"></input>
            <p className="qty">{this.state.updatedservings * a.qty}</p>
            <p className="unit">{a.unit}</p>
            <p className="name">{a.name}</p>
            </li>
          )
        })
      }
      </ul>
  </div>
);
}
})

var RecipeForm = React.createClass({
  propTypes: {
  initialRecipe: React.PropTypes.object.isRequired,
  OnSaveRecipe: React.PropTypes.func.isRequired
},
getInitialState(){
  return {
  recipe: this.props.initialRecipe
  }
},
handleChange(prop,e){
this.setState({
  recipe: _.extend({},this.state.recipe, _.object([prop], [e.target.value]))
})
},
saveRecipe(e){
  e.preventDefault()
  this.props.OnSaveRecipe(this.state.recipe)
  this.setState({recipe: this.props.initialRecipe})
},
render(){
  return (
    <div className="add-recipe-div">
    <form onSubmit={this.saveRecipe}>
      <ul className="create-ul">
      <h2>Add Recipe</h2>
        <li><h4>Recipe Name</h4><input onChange={this.handleChange.bind(this, 'Name')} type="text" placeholder="Add Recipe Name" value={this.state.recipe.Name}></input></li>
        <li><h4>Servings</h4><input onChange={this.handleChange.bind(this, 'Servings')} type="number" placeholder="Add Recipe Amount" value={this.state.recipe.Servings}></input></li>
        <li><h4>Ingredients</h4><input onChange={this.handleChange.bind(this, 'ingredients')} type="text" placeholder="Add Ingredients" value={this.state.recipe.ingredients}></input></li>
        <li><input className="save-recipe-btn"type="submit" value="Save Recipe"></input></li>
      </ul>
    </form>
  </div>
  )
}

})






export default {App};
