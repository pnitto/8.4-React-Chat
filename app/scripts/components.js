
var App = React.createClass({
  propTypes: {
    recipes: React.PropTypes.array.isRequired,
    newRecipe: React.PropTypes.object.isRequired,
    //editRecipe: React.PropTypes.func.isRequired,
    //saveRecipe: React.PropTypes.func.isRequired
  },
  render(){
  return (
    <div>
      <ul>
        {
          this.props.recipes.map((r) => <Recipe recipe={r} key={r.id}/>)
        }
      </ul>
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
          <form onSubmit={this.updateServings}>
            <h3>Makes</h3>
            <input type="number" value={this.state.servings} onChange={this.handleChange}/>
            <h4>servings</h4>
            <button type="submit">Adjust Recipe</button>
          </form>
    <h1>{this.props.recipe.Name}</h1>
    <ul>
      {this.props.recipe.ingredients.map((a) => {
        return (
          <li key={_.uniqueId('recipe')}>
          <h3>{this.state.updatedservings * a.qty}</h3>
          <h5>{a.unit}</h5>
          <h1>{a.name}</h1>
          </li>
        )
      })
    }
    </ul>
  </div>
);
}
})

export default {App};
