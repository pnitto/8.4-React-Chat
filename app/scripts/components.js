
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

export default {App};
